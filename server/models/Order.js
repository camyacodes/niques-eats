const mongoose = require("mongoose");

const { Schema } = mongoose;

const Product = require("./Product");

const orderSchema = new Schema({
	address: {
		type: String,
	},
	address2: { type: String },
	email: { type: String },
	firstName: { type: String },
	city: { type: String },
	state: { type: String },
	lastName: { type: String },
	phone: { type: String },
	zipCode: { type: String },
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product",
		},
	],
	purchaseDate: {
		type: Date,
		default: Date.now,
		get: (date) => new Date(date).toISOString(),
	},
	total: { type: Number },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;