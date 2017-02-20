var Recipe = require('../models/recipe');
var User = require('../models/user');

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
	Recipe.findById(req.params.id , function(err, recipe) {
		if(!recipe) return res.status(404).send("Sorry Recipe not found!");
		if(err) return res.status(500).send(err);
		res.render("recipes/show" , {
      		title: "Recipe",
    		recipe: recipe
    	});
	});
}

function newRecipes(req, res) {
	var newRecipe = {
		id: "",
		title: "",
		ingredient: "",
		method: "",
		cookTime: 0,
		prepTime: 0,
		serves: 0,
		skill: 0
	}
	res.render("recipes/new" , {
		title: "New Recipe",
		recipe: newRecipe
	});
}

function createRecipes(req, res) {
	Recipe.create(req.body, function(err, recipe) {
		if(err) req.flash('error' , "Sorry, something went wrong with posting your recipe please try again!");
		User.findByIdAndUpdate(req.user.id, { $addToSet: { recipes: recipe } }, function(err, user) {
			if(err) req.flash('error' , "Sorry, something went wrong with posting your recipe please try again!");
			res.redirect("/");
		})
	});
}
   
function editRecipes(req, res) {
	Recipe.findById(req.params.id , function(err, recipe) {
		if(!recipe) return res.status(404).send("Sorry Recipe not found!");
		if(err) return res.status(500).send(err);
		res.render("recipes/edit" , {
      		title: "Recipe",
    		recipe: recipe
    	});
	});
}

function updateRecipes(req, res) {
	Recipe.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ runValidators: true },
		function(err, recipe) {
			if(err) return res.status(500).send(err);
			res.redirect("/");
		}
	);
}

function deleteRecipes(req, res) {
	Recipe.findByIdAndRemove(req.params.id , function(err) {
		res.redirect("/")
	});
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