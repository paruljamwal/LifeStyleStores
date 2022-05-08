const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		brand: { type: String, required: true },
		productName: { type: String, required: true },
		price: { type: Number, required: true },
		color: { type: String, required: true },
		size: [
			{ type: String, required: true },
			{ type: String, required: true },
			{ type: String, required: true },
			{ type: String, required: true },
			{ type: String, required: true },
		],
		productType: { type: String, required: true },
		style: { type: String, required: true },
		fabric: { type: String, required: true },
		image1: { type: String, required: true },
		image2: { type: String, required: true },
		image3: { type: String, required: true },
		image4: { type: String, required: true },
		image5: { type: String, required: true },
		image6: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("product", productSchema);
