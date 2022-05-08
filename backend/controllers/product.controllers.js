const express = require("express");

const Product = require("../models/product.models");

const router = express.Router();

//post route for products
router.post("", async (req, res) => {
	try {
		const product = await Product.create(req.body);

		return res.status(201).send(product);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

//get route for products

router.get("", async (req, res) => {
	try {
		const products = await Product.find().lean().exec();

		return res.status(200).send(products);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

//get route for single product

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id).lean().exec();

		return res.status(200).send(product);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

//patch route for single product

router.patch("/:id", async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
			.lean()
			.exec();

		return res.status(200).send(product);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

//delete route for single product

router.delete("/:id", async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id)
			.lean()
			.exec();

		return res.status(200).send(product);
	} catch (err) {
		return res.status(500).send({ message: err.message });
	}
});

module.exports = router;
