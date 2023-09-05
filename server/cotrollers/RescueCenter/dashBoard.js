const express = require("express");
const Rescuer = require("../../models/rescue");

module.exports.Profile = async (req, res) => {
  const { id } = req.params;
  const profile_details = await Rescuer.findById(id);
  res.send(profile_details);
};
