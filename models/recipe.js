var mongoose = require('mongoose');

var RecipeSchema = mongoose.Schema({
	title: String,
	ingredient: String,
	method: String,
	cookTime: Number,
	prepTime: Number,
	serves: Number,
	skill: Number
});

module.exports = mongoose.model('Recipe', RecipeSchema);

// {
//     type: String,
//     required: true,
//     unique: true,
//   },
// {
//     type: String,
//     required: true
//   },
// {
//     type: String,
//     required: true
//   },
// {
//     type: Number,
//     required: true
//   },
// {
//     type: Number,
//     required: true
//   },
// {
//     type: Number,
//     required: true
//   },
// {
//     type: Number,
//     required: true
//   }