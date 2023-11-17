const { User, Product, Category, Order } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // find products by category ex: Brunch Sides, Dinner Drinks, etc
    products: async (parent, { category }) => {
      // console.log("Received category:", category);
      const params = {};
      params.category = category ? category : {};
      // console.log("Query parameters:", params);
      return Product.find(params).populate("category");
    },
    // Find all categories
    categories: async () => {
      return Category.find();
    },
    orders: async (parent, { username }) => {
      // const params = username ? { username } : {};
      // return Category.find(params);
      return Order.find().populate("products");
    },
  },
};

module.exports = resolvers;
