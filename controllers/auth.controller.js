const config = require('../auth.config');
const db = require('../models');
const User = db.User;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  console.log('======== AuthController: signup() ============');
  console.log('firstname: ' + req.body.firstname);
  console.log('lastname: ' + req.body.lastname);
  console.log('email: ' + req.body.username);
  console.log('password: ' + req.body.password);
  console.log('==============================================');

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: 'User was registered successfully!' });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      consolr.log(err);
      return;
    }

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 14400, // 4 hours
    });

    res.status(200).send({
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      accessToken: token,
    });
  });
};
