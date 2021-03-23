exports.index = (req, res) => {
  res.render("form", { title: "Contact Us", uuid: "134" });
};

exports.redtail = (req, res) => {
  console.log(req.body);
  // TODO: Create contact in Redtail
  res.render("success");
};
