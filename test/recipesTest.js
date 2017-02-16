var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();
var expect = require('chai').expect;
var Recipe = require('../models/recipe');

chai.use(chaiHttp);

describe('Recipes', function() {
	var recipe = new Recipe({
		title: "Baked Manicotti with Sausage and Peas",
		ingredient: "3/4 cup milk",
		method: "Place an oven rack in the center of the oven.",
		cookTime: 60,
		prepTime: 25,
		serves: 5,
		skill: 3
	});

	beforeEach(function(done) {
		recipe.save(function(err, newRecipe) {
			if (err) return console.log(err);
			console.log("made newRecipe with id " + newRecipe._id);
			recipe._id = newRecipe._id;
			done();
		});
	});

	afterEach(function(done) {
		Recipe.findByIdAndRemove(recipe._id, function(err) {
			if (err) return console.log(err);
			done();
		});
	});

	// describe a test for ID/GET
	it('should list a SINGLE recipe on /<id> GET', function(done) {
		chai.request(app)
	  	.get('/' + recipe._id)
	  	.end(function(err, res){
		    res.should.have.status(200);
		    res.should.be.html;
		    res.text.should.match(/Show/);
		    res.text.should.match(/edit/);
		    res.text.should.match(/Delete/);
		    done();
	  	});
	});

	// describe a test for GET
	it('should list ALL recipes on / GET', function(done) {
		var request = chai.request(app);
		request
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.html;
			res.text.should.match(/Welcome to the Recipe Page!/);
			// res.text.should.match("Baked Manicotti with Sausage and Peas");
			done();
		});
	});

// 	// describe a test for POST
//   	it('should add a SINGLE recipe on / POST' , function(done){
// 	    var request = chai.request(app);
// 	    request.post('/')
// 	      	.set('content-type', 'application/x-www-form-urlencoded')
// 	      	.send({
// 		        _id: 123,
// 		        title: "Baked Rigatoni with Bechamel Sauce",
// 				ingredient: "115g unsalted butter, 1/2 cup and 2 tbsps plain flour, 1L whole milk, at room temperature, Pinch fresh nutmeg, Sea salt and white pepper, 1 cup grated Fontina cheese, 250g thinly sliced prosciutto or ham, julienned, 500g dry rigatoni, 40g unsalted butter, diced",
// 				method: "Preheat the oven to 210C/Gas 7. 1) In a 2-litre saucepan, melt the butter over medium heat. Add the flour and whisk until smooth, about 2 minutes. Always stirring, gradually add the milk and continue to whisk until the sauce is smooth and creamy. Simmer until it is thick enough to coat the back of a spoon. This will take approximately 10 minutes. Remove from the heat and stir in the nutmeg, 1/2 cup of Fontina cheese and prosciutto, and season with salt and white pepper. Set aside. 2) In a large pot, bring to a boil 5 1/2 litres of salted water. Add the rigatoni and cook for about 5 minutes. Since you will be cooking the pasta a second time in the oven, you want to make sure the inside is still hard. Drain in a colander. Return the pasta to the pot and pour in the bechamel sauce. Using a wooden spoon, mix well until all of the pasta is coated with the sauce. 3) Into a greased 23-by-33 cm baking dish, pour the pasta and cream sauce. Smooth out the top and sprinkle with the remaining 1/2 cup of Fontina. Dot the top with diced butter and bake in the oven for 25 minutes or until bubbling and the top is golden brown.",
// 				cookTime: 30,
// 				prepTime: 25,
// 				serves: 6,
// 				skill: 3
// 	      	})
// 	      	.end(function(err, res){
// 		        res.should.have.status(200);
// 		        res.should.be.html;
// 		        // res.text.should.match(/All recipes/);
// 		        request
// 				.get('/123')
// 				.end(function(err, res){
// 		            res.should.have.status(200);
// 		            res.should.be.html;
// 		            res.text.should.match(/115g unsalted butter/);
// 		            res.text.should.match(/Baked Rigatoni with Bechamel Sauce/);

// 		            Recipe.findByIdAndRemove(123, function(err) {
// 		              if (err) return console.log(err);
// 		              done();
// 		            });
// 	          	});
// 	      	});
//   	});

// 	// describe a test for PUT
// 	it('should update a SINGLE recipe on /<id> PUT' , function(done){
// 		var request = chai.request(app);
// 		request.put('/' + recipe.id)
// 		.set('content-type', 'application/x-www-form-urlencoded')
// 		.send({'cookTime': 30, 'serves': 6})
// 		.end(function(err, res){
// 			res.should.have.status(200);
// 			res.should.be.html;
// 			res.text.should.match(/All recipes/);
// 			request
// 			.get('/' + recipe.id)
// 			.end(function(err, res){
// 			    res.should.have.status(200);
// 			    res.should.be.html;
// 			    res.text.should.match(/30/);
// 			    res.text.should.match(/serves/);
// 			    done();
// 			});
// 		});
// 	});

// 	// describe a test for DELETE
// 	it('should delete a SINGLE recipe on /<id> DELETE' , function(done) {
// 		var request = chai.request(app);
// 		request.delete('/' + recipe.id)
// 		.end(function(err, res){
// 		    res.should.have.status(200);
// 		    res.should.be.html;
// 		    res.text.should.match(/All recipes/);
// 		    request
// 				.get('/' + recipe.id)
// 				.end(function(err, res){
// 			        res.should.have.status(404);
// 			        done();
// 		    	});
// 		});
// 	});
// });
});