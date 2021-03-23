const express = require("express");
const router = express.Router();
const dashController = require("../controllers/dashController");

router.route("/").get(dashController.index);

// Export API routes
module.exports = router;
