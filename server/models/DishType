const { Schema, model } = require("mongoose");

const dishTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const DishType = model("DishType", dishTypeSchema);

module.exports = DishType;
