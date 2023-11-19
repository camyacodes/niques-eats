const { Schema, model } = require("mongoose");

const servingTimeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const ServingTime = model("ServingTime", servingTimeSchema);

module.exports = ServingTime;
