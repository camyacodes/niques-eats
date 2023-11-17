const mongoose = require("mongoose");
const { User, Product, Category, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  // -----------------------------------QUERIES(R)---------------------------------- //
  Query: {
    //If user is logged in and jas a jwt token
    loggedInUser: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate({
            path: "orders",
            populate: {
              path: "products",
              model: "Product",
              populate: {
                path: "category",
                model: "Category",
              },
            },
          })
          .select("-__v -password");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // Find USERS by username or all users
    users: async (parent, username) => {
      const params = username ? username : {};
      return User.find(params)
        .populate({
          path: "orders",
          populate: {
            path: "products",
            model: "Product",
            populate: {
              path: "category",
              model: "Category",
            },
          },
        })
        .select("-__v -password");
    },
    // find PRODUCTS by category ex: Brunch Sides, Dinner Drinks, etc or just all products
    products: async (parent, category) => {
      const params = {};
      params.category = category ? category : {};
      return Product.find(params.category).populate("category");
    },
    // Find all CATEGORIES
    categories: async () => {
      return Category.find();
    },
    // Find ORDERS by specific user or just all orders
    orders: async (parent, username) => {
      const params = username ? username : {};
      return Order.find(params).populate({
        path: "products",
        model: "Product",
        populate: {
          path: "category",
          model: "Category",
        },
      });
    },
  },
  // -------------------------------------------MUTATIONS(CUD)---------------------------------- //
  Mutation: {
    // CREATE A NEW USER / SIGNUP
    addUser: async (parents, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // LOGIN MUTATION W/ AUTHENTICATORS
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, args, context) => {
      if (context.user) {
        // Convert product IDs to ObjectId
        // const productIds = args.products.map(
        //   (productId) => new mongoose.Types.ObjectId(productId)
        // );
        const order = await Order.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { orders: order._id } },
          { new: true }
        );

        return order;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
