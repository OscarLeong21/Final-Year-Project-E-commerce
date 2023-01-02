const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register Function
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(
      "This user already exists, Please use another email or name!"
    );
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  generateToken(user, 201, res);
});

// Login Function
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error("Please enter email and password to login.", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new Error("Wrong email or password", 401));
  }

  const MatchPassword = await user.matchPassword(password);

  if (!MatchPassword) {
    return next(new Error("Wrong email or password", 401));
  }

  generateToken(user, 200, res);
});

// LOGOUT USER
const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true.valueOf,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get user detail
const userDetail = async (req, res) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
};

// Admin get all user
const adminGetAllUser = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};

// Admin delete user
const admindeleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist: ${req.params.id}`, 400)
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
    message: "User Deleted",
  });
};

module.exports = {
  registerUser,
  authUser,
  logout,
  userDetail,
  adminGetAllUser,
  admindeleteUser,
};
