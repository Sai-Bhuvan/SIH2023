const express = require("express");
const router = express.Router({ mergeParams: true });
const Login = require("../../cotrollers/Authentication/UserAuth/Login");
const Registration = require("../../cotrollers/Authentication/UserAuth/Registration");
const passport = require("passport");
const catchAsync = require("../../utilities/CatchAsync");

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
  .post(catchAsync(Registration.register));

router.route("/logout").get(Login.logout);

module.exports = router;
