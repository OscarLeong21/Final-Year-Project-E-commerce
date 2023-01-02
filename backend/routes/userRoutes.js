const express = require("express");
const {
  registerUser,
  authUser,
  logout,
  userDetail,
  adminGetAllUser,
  admindeleteUser,
} = require("../controller/userController");
const { AuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(registerUser);

router.post("/login", authUser);

router.route("/logout").get(logout);

router.route("/me").get(AuthenticatedUser, userDetail);

router.route("/admin/users").get(
  // AuthenticatedUser, authorizeRoles("admin"),
  adminGetAllUser
);

router.route("/admin/user/:id").delete(admindeleteUser);

module.exports = router;
