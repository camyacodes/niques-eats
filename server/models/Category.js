const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  dishType: {
    type: String,
    required: true,
    trim: true,
  },
  servingTime: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = model("Category", categorySchema);

module.exports = Category;
