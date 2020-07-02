const router = require('express').Router();
const recipesController = require('../../controllers/recipesController');
const apiController = require('../../controllers/apiControllers');

// Matches with "/api/recipe"
router.route('/').get(recipesController.findAll).post(recipesController.create);

// Matches with "/api/recipes/:id"
router
  .route('/:id')
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);

router.route('/edamam/search').get(apiController.search);

module.exports = router;
