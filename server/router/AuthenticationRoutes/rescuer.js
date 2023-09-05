const express = require("express");
const router = express.Router({ mergeParams: true });
const Login = require("../../cotrollers/Authentication/RescueAuth/Login");
const Registration = require("../../cotrollers/Authentication/RescueAuth/Registration");
const Verify = require("../../cotrollers/Verify/verify");
const passport = require("passport");
const catchAsync = require("../../utilities/CatchAsync");
const { isVerified } = require("../../middleware");

router.route("/rescue/login").post(
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/",
  }),
  Login.login
);

router
  .route("/rescue/register")
  .post(isVerified, catchAsync(Registration.register));

router.route("/rescue/logout").get(Login.logout);

module.exports = router;
