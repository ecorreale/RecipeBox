const router = require('express').Router();
const recipeRoutes = require('./recipes');
const auth = require('./auth.routes');
const user = require('./user.routes');

// recipe routes
router.use('/recipes', recipeRoutes);
router.use('/auth', auth);
router.use('/user', user);
module.exports = router;
