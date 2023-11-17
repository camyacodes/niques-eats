const { Schema, model } = require("mongoose");
const categorySchema = require("./Category");

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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

// const Product = mongoose.model("Product", productSchema);
const Product = model("Product", productSchema);

module.exports = Product;
