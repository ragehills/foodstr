var mongoose = require('mongoose');

var RecipeSchema = mongoose.Schema({
	title: {
	    type: String,
	    required: true,
	    unique: true
	},
	ingredient: {
	    type: String,
		required: true
	},
	method: {
	    type: String,
	    required: true
	},
	cookTime: {
	    type: Number,
	    required: true
	},
	prepTime: {
	    type: Number,
	    required: true
  	},
	serves: {
    	type: Number,
    	required: true
  	},
	skill: {
	    type: Number,
	    required: true
  	},
  	
  	url: {
  		type: String
  	},

  	likes: [{
  		type: Number
  	}]
});

module.exports = mongoose.model('Recipe', RecipeSchema);