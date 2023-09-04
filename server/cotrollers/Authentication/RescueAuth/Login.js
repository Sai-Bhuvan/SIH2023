const express = require("express");
const Rescuer = require("../../../models/rescue");

module.exports.login = async (req, res) => {
  res.redirect("/");
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
