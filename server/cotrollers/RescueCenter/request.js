const express = require("express");
const Requests = require("../../models/request");

module.exports.getRequestsData = async (req, res) => {
  const { id } = req.params;
  const profile_details = await Requests.find({ rescuer: id });
  res.status(200).json(profile_details);
};
