const mongoose = require("mongoose");

const formModal = mongoose.Schema({
  title: { type: String },
  uuid: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

var Form = (module.exports = mongoose.model("form", formModal));

module.exports.get = function (callback, limit) {
  Form.find(callback).limit(limit);
};
