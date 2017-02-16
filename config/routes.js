var express = require("express");
var router = express.Router();
var recipesController = require('../controllers/recipes');

router.route('/')
  .get(recipesController.index)
  .post(recipesController.create);
	
router.get('/new', recipesController.new);
	
router.route('/:id')
  .get(recipesController.show)
  .put(recipesController.update)
  .delete(recipesController.delete);
	
router.get('/:id/edit', recipesController.edit);
 	
module.exports = router;