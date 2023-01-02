const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProducts2,
  getProductById,
  addProduct,
  admindeleteProduct,
  adminProducts,
} = require("../controller/productControllers");
// const { AuthenticatedUser, authorizeRoles } = require("../middlewares/auth.js");

router.route("/").get(getProducts);

router.route("/2").get(getProducts2);

router.route("/:id").get(getProductById);

router.route("/admin/products").get(adminProducts);

router.route("/create").post(addProduct);

router
  .route("/admin/product/:id")
  .delete(admindeleteProduct);

module.exports = router;
