const express = require("express");
const router = express.Router({ mergeParams: true });
const RescueCenter = require("../../cotrollers/RescueCenter/dashBoard");

router.route("/dashboard/req/:id").get(RescueCenter.Profile);

module.exports = router;
