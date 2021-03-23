const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  email: { type: String },
  userkey: { type: String },
  forms: [{ type: mongoose.Schema.Types.ObjectId, ref: "form" }],
});

const User = (module.exports = mongoose.model("user", userModel));

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
