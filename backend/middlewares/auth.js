const jwt = require("jsonwebtoken");
const User = require("../models/User");

const AuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new Error("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Error(
          `Role: ${req.user.role} is not allowed to access this resource. `,
          403
        )
      );
    }

    next();
  };
};

module.exports = { AuthenticatedUser, authorizeRoles };
