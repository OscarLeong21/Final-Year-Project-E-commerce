const express = require("express");
const {
  newOrder,
  getOneOrder,
  myOrder,
  adminGetOrder,
  adminDeleteOrder,
} = require("../controller/orderController");
const router = express.Router();

const { AuthenticatedUser, authorizeRoles } = require("../middlewares/auth.js");

router.route("/order/new").post(newOrder);

router.route("/order/:id").get(AuthenticatedUser, getOneOrder);

router.route("/orders/me").get(AuthenticatedUser, myOrder);

router.route("/admin/orders").get(adminGetOrder);

router.route("/admin/order/:id").delete(adminDeleteOrder);

module.exports = router;
