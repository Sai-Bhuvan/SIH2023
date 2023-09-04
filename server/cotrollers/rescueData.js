const express = require("express");
const Rescuer = require("../models/rescue");

module.exports.getRescueData = async (req, res) => {
  try {
    const allRescueData = await Rescuer.find({});
    res.send(allRescueData);
  } catch (e) {
    res.send("Oops , i will fix it");
  }
};
