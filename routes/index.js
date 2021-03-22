const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET form frame. */
router.get("/form", function (req, res, next) {
  res.render("form", { title: "Contact Us", uuid: "134" });
});

router.post("/redtail", async (req, res, next) => {
  console.log(req.body);
  res.render("success");
});

module.exports = router;
