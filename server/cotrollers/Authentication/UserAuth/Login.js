const express = require("express");
const User = require("../../../models/user");

module.exports.login = async (req, res) => {
  res.send("logged in successfully");
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.flash("success", "Logged out successfully");
  res.redirect("/");
};
