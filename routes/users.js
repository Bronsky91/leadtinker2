const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/users").post(userController.new);

router.route("/login").post(userController.login);

// Export API routes
module.exports = router;
