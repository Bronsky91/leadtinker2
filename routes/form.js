const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

/* GET form frame. */
router.route("/form").get(formController.index);

router.route("/redtail").post(formController.redtail);

module.exports = router;
