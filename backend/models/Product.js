const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
  },
  countInStock: {
    type: Number,
    required: [true, "Stocks is required."],
  },
  imageUrl: {
    type: String,
    required: [true, "Product image is required."],
  },
  category: {
    type: String,
    required: [true, "Category is required."],
  },
});

const Products = mongoose.model("product", productSchema);

module.exports = Products;
