const express = require('express');
const router = express.Router();
const { authJwt } = require('../../middleware');
const controller = require('../../controllers/user.controller');

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

router.get('/test/all', controller.allAccess);

router.get('/test/user', [authJwt.verifyToken], controller.userBoard);

module.exports = router;
