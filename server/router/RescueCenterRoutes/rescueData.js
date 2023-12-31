const express = require("express");
const router = express.Router({ mergeParams: true });
const RescueData = require("../../cotrollers/RescueCenter/rescueData");
const RequestsData = require("../../cotrollers/RescueCenter/request");

router.route("/rescuecenters").get(RescueData.getRescueData);

module.exports = router;
