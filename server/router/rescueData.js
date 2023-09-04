const express = require("express");
const router = express.Router({ mergeParams: true });
const RescueData = require("../cotrollers/rescueData");

router.route("/rescuecenters").get(RescueData.getRescueData);

module.exports = router;
