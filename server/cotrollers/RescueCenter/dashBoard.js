const express = require("express");
const Rescuer = require("../../models/rescue");

module.exports.Profile = async (req, res) => {
  const { id } = req.params;
  const profile_details = await Rescuer.findById(id);
  console.log(profile_details);
  res.status(200).json(profile_details);
};
