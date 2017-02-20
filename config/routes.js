var express = require("express");
var router = express.Router();
var recipesController = require('../controllers/recipes');
var usersController = require('../controllers/users');
var sessionsController = require('../controllers/sessions');
var recipesApiController = require('../controllers/api/recipes');

// API section 
router.route('/api/recipes')
      .get(recipesApiController.index)
      .post(recipesApiController.create);

router.route('/api/recipes/:id')
      .get(recipesApiController.show)
      .put(recipesApiController.update)
      .delete(recipesApiController.delete)
      .patch(recipesApiController.like);

router.route('/sessions')
      .post(sessionsController.create)
      .delete(sessionsController.delete);

router.route('/sessions/new')
      .get(sessionsController.new);

router.route('/users')
      .post(usersController.create);

router.route('/users/new')
      .get(usersController.new);

router.route('/users/:id')
  .get(usersController.show);

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