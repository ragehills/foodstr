var express = require("express");
var router = express.Router();
var recipesController = require('../controllers/recipes');
var usersController = require('../controllers/users');

router.route('/users')
      .post(usersController.create);

router.route('/users/new')
      .get(usersController.new);

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