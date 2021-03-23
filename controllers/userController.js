const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Handle create user actions
exports.new = (req, res) => {
  const user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.passwordHash = bcrypt.hashSync(req.body.password, 10);
  // save the user
  user.save(() => {
    res.json({
      data: user,
    });
  });
};

// Handle user login
exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      return res.status(401).send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(req.body.password, user.passwordHash)) {
      return res.status(401).send({ message: "The password is invalid" });
    }
    res.json(user);
  });
};
