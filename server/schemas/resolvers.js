const { User, Product, Category, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  // -----------------------------------QUERIES(R)---------------------------------- //
  Query: {
    // Fnd USERS by username or all users
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
  },
};

module.exports = resolvers;
