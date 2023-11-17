const { User, Product, Category, Order } = require("../models");

const resolvers = {
  Query: {
    // Fnd users by username or all users
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
    // find products by category ex: Brunch Sides, Dinner Drinks, etc or just all products
    products: async (parent, category) => {
      const params = {};
      params.category = category ? category : {};
      return Product.find(params.category).populate("category");
    },
    // Find all categories
    categories: async () => {
      return Category.find();
    },
    // Find orders by specific user or just all orders
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
};

module.exports = resolvers;
