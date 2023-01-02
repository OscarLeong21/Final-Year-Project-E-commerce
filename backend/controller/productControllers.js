// fetching
const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");
const Frontendfunctions = require("../utils/frontendfunctions");

// GET PRODUCTS
const getProducts = async (req, res, next) => {
  // try {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const frontendfunctions = new Frontendfunctions(
    Product.find(),
    req.query
  ).filter();

  let products = await frontendfunctions.query;

  let filteredProductsCount = products.length;

  frontendfunctions.pagination(resultPerPage);

  products = await frontendfunctions.query.clone();

  res.status(200).json({
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
};

const getProducts2 = async (req, res, next) => {
  const resultPerPage = 200;
  const frontendfunctions = new Frontendfunctions(
    Product.find(),
    req.query
  ).filter();

  let products = await frontendfunctions.query;

  let filteredProductsCount = products.length;

  frontendfunctions.pagination(resultPerPage);

  products = await frontendfunctions.query.clone();

  res.status(200).json({
    success: true,
    products,
    filteredProductsCount,
  });
};

// GET PRODUCTS BY ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// AddProduct Function
const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, countInStock, category, imageUrl } =
    req.body;

  const productExists = await Product.findOne({ name });

  if (productExists) {
    res.status(400);
    throw new Error("This product already exists, Please use another name!");
  }

  const product = await Product.create({
    name,
    description,
    price,
    countInStock,
    category,
    imageUrl,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      countInStock: product.countInStock,
      category: product.category,
      imageUrl: product.imageUrl,
    });
  } else {
    res.statusMessage(400);
    throw new Error("Error Occured!");
  }
});

// Admin Get all Product
const adminProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};


//Delete Product

const admindeleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Products not found",
    });
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product deleted.",
  });
};

module.exports = {
  getProducts,
  getProducts2,
  getProductById,
  addProduct,
  admindeleteProduct,
  adminProducts,
};
