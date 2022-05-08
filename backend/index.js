const express = require("express");

//importing router from controllers

const productsController = require("./controllers/product.controllers");

const app = express();

app.use(express.json());

app.use("/products", productsController);

module.exports = app;
