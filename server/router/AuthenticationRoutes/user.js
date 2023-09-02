const express = require("express");
const router = express.Router({ mergeParams: true });
const Login = require("../../cotrollers/Authentication/UserAuth/Login");
const Registration = require("../../cotrollers/Authentication/UserAuth/Registration");
const Verify = require("../../cotrollers/Verify/verify");
const passport = require("passport");
const catchAsync = require("../../utilities/CatchAsync");
const { isVerified } = require("../../middleware");

router
  .route("/login")
  .get(Login.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/",
    }),
    Login.login
  );

router
  .route("/register")
  .get(Registration.renderRegister)
  .post(isVerified, catchAsync(Registration.register));

router.route("/verify").post(catchAsync(Verify.verify));

router.route("/logout").get(Login.logout);

module.exports = router;
