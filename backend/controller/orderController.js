const Order = require("../models/Orders.js");
const Product = require("../models/Product.js");

// New Order
const newOrder = async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo, totalPrice, userId } =
    req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    totalPrice,
    paidAt: Date.now(),
    user: userId,
  });

  res.status(201).json({
    success: true,
    order,
  });
};

// GET ONE ORDER
const getOneOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new Error("No Order Here.", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// Users getting own orders
const myOrder = async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
};

// Admin getting all orders
const adminGetOrder = async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
};


// Admin deleting the orders
const adminDeleteOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new Error("No order with this id.", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
};

module.exports = {
  newOrder,
  getOneOrder,
  myOrder,
  adminGetOrder,
  adminDeleteOrder,
};
