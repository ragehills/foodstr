var Recipe = require('../models/recipe');

function indexRecipes(req, res) {
	Recipe.find({} , function(err, recipes) {
		if(err) return res.status(500).send(err);
		res.render("recipes/index" , {
			title: "Recipes",
			recipes: recipes
		});
	});
}

function showRecipes(req, res) {
	res.send('show');
}

function newRecipes(req, res) {
	res.send('new');
}

function createRecipes(req, res) {
	res.send('create');
}

function editRecipes(req, res) {
	res.send('edit');
}

function updateRecipes(req, res) {
	res.send('update');
}

function deleteRecipes(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexRecipes,
	show: showRecipes,
	new: newRecipes,
	create: createRecipes,
	edit: editRecipes,
	update: updateRecipes,
	delete: deleteRecipes
}