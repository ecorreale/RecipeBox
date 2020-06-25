const router = require('express').Router();
const recipeRoutes = require('./recipes');

// recipe routes
router.use('/recipes', recipeRoutes);

module.exports = router;
