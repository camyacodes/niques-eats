const { Schema, model } = require("mongoose");
const categorySchema = require("./Category");
const dishTypeSchema = require("./DishType");
const servingTimeSchema = require("./ServingTime");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  dishType: {
    type: Schema.Types.ObjectId,
    ref: "DishType",
  },
  servingTime: {
    type: Schema.Types.ObjectId,
    ref: "ServingTime",
  },
});

// const Product = mongoose.model("Product", productSchema);
const Product = model("Product", productSchema);

module.exports = Product;
