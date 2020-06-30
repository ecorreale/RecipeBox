const db = require('../models');
const User = db.User;

checkDuplicateEmail = (req, res, next) => {
  // Email
  console.log(req.body);
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: 'Failed! Email is already in use!' });
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;
