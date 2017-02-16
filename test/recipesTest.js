var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var Recipe = require('../models/recipe');

chai.use(chaiHttp);

describe('Recipes', function() {
	var recipe = new Recipe({
		title: "Baked Manicotti with Sausage and Peas",
		ingredient: "3/4 cup milk, 1/2 cup double cream, 6 ounces (about 3 cups) grated Pecorino Romano, 1/4 cup chopped fresh basil leaves, 2 tablespoons olive oil, plus extra for drizzling, 1 pound sweet Italian sausage, casings removed, 1 large or 2 small shallots, finely chopped, 2 cloves garlic, minced, 1/4 teaspoon salt, plus 1/2 teaspoon, 1/4 teaspoon freshly ground black pepper, plus 1/4 teaspoon, 1/4 cup white wine, such as Pinot Grigio, 3/4 cup (4 ounces) frozen petite peas, thawed, 1/2 cup whole milk ricotta, 12 manicotti shells, 1 (26-ounce) jar marinara sauce, 2 cups (8 ounces) shredded mozzarella",
		method: "Place an oven rack in the center of the oven. Preheat the oven to 175°C. Spray a 9-by-13-by-2-inch glass baking dish with vegetable oil cooking spray. Set aside. For the fonduta sauce: In a medium heavy-bottomed saucepan, bring the milk and cream to a simmer over medium heat. Reduce the heat to low. Add the Pecorino Romano and whisk until the cheese is melted and the sauce is smooth. Remove the pan from the heat and stir in the basil. Set aside. In a large frying pan, heat 2 tablespoons of olive oil over medium-high heat. Add the sausage, shallots, garlic, 1/4 teaspoon salt, and 1/4 teaspoon pepper. Cook until the sausage is cooked through and the vegetables have softened, 8 to 10 minutes. Using a wooden spoon, break the sausage into 1/2-inch pieces. Increase the heat to high. Add the wine and scrape up the brown bits that cling to the bottom of the pan with a wooden spoon. Cook until the wine has evaporated, about 2 minutes. Remove the pan from the heat and set aside to cool slightly. Add the peas, ricotta, and 1 cup of the fonduta sauce. Season with remaining 1/2 teaspoon kosher salt and 1/4 teaspoon pepper. Bring a large pot of salted water to a boil over high heat. Add the pasta and cook until just tender, 7 to 8 minutes. Drain and set aside. Spread half of the marinara sauce over the bottom of the prepared baking dish. Using a small spoon, fill the manicotti shells with the sausage filling and arrange in a single layer in the baking dish. Pour the remaining marinara sauce on top of the filled shells. Spoon the remaining fonduta sauce on top and sprinkle with the mozzarella. Drizzle with olive oil and bake until bubbly and golden brown, 30 to 35 minutes.",
		cookTime: 60,
		prepTime: 25,
		serves: 5,
		skill: 3
	});

	beforeEach(function() {
		recipe.save(function(err, newRecipe) {
			if (err) return console.log(err);
				console.log("made newRecipe with id " + newRecipe.id);
				recipe.id = newRecipe.id;
		})
	})

	afterEach(function() {
		Recipe.findByIdAndRemove(recipe.id, function(err) {
			if (err) return console.log(err);
		})
	})
	// describe a test for GET
	it('should list ALL recipes on / GET', function(done) {
		var request = chai.request(app);
		request
		.get('/')
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.html;
			// res.text.should.match("All recipes");
			// res.text.should.match("Baked Manicotti with Sausage and Peas");
			done();
		});
	});

	// describe a test for ID/GET
	it('should list a SINGLE recipe on /<id> GET', function(done) {
		chai.request(app)
	  	.get('/' + recipe.id)
	  	.end(function(err, res){
		    res.should.have.status(200);
		    res.should.be.html;
		    // res.text.should.match(/Post 1/);
		    done();
	  });
	});

	// describe a test for POST
  	it('should add a SINGLE recipe on / POST' , function(done){
	    var request = chai.request(app);
	    request.post('/')
	      	.set('content-type', 'application/x-www-form-urlencoded')
	      	.send({
		        _id: 123,
		        title: "Baked Rigatoni with Bechamel Sauce",
				ingredient: "115g unsalted butter, 1/2 cup and 2 tbsps plain flour, 1L whole milk, at room temperature, Pinch fresh nutmeg, Sea salt and white pepper, 1 cup grated Fontina cheese, 250g thinly sliced prosciutto or ham, julienned, 500g dry rigatoni, 40g unsalted butter, diced",
				method: "Preheat the oven to 210C/Gas 7. 1) In a 2-litre saucepan, melt the butter over medium heat. Add the flour and whisk until smooth, about 2 minutes. Always stirring, gradually add the milk and continue to whisk until the sauce is smooth and creamy. Simmer until it is thick enough to coat the back of a spoon. This will take approximately 10 minutes. Remove from the heat and stir in the nutmeg, 1/2 cup of Fontina cheese and prosciutto, and season with salt and white pepper. Set aside. 2) In a large pot, bring to a boil 5 1/2 litres of salted water. Add the rigatoni and cook for about 5 minutes. Since you will be cooking the pasta a second time in the oven, you want to make sure the inside is still hard. Drain in a colander. Return the pasta to the pot and pour in the bechamel sauce. Using a wooden spoon, mix well until all of the pasta is coated with the sauce. 3) Into a greased 23-by-33 cm baking dish, pour the pasta and cream sauce. Smooth out the top and sprinkle with the remaining 1/2 cup of Fontina. Dot the top with diced butter and bake in the oven for 25 minutes or until bubbling and the top is golden brown.",
				cookTime: 30,
				prepTime: 25,
				serves: 6,
				skill: 3
	      	})
	      	.end(function(err, res){
		        res.should.have.status(200);
		        res.should.be.html;
		        // res.text.should.match(/All recipes/);
		        request
				.get('/123')
				.end(function(err, res){
		            res.should.have.status(200);
		            res.should.be.html;
		            // res.text.should.match(/115g unsalted butter/);
		            // res.text.should.match(/Baked Rigatoni with Bechamel Sauce/);

		            Recipe.findByIdAndRemove(123, function(err) {
		              if (err) return console.log(err);
		              done();
		            });
	          	});
	      	});
  	});

	// describe a test for PUT
	it('should update a SINGLE recipe on /<id> PUT' , function(done){
		var request = chai.request(app);
		request.put('/' + recipe.id)
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({'cookTime': 30, 'serves': 6})
		.end(function(err, res){
			res.should.have.status(200);
			res.should.be.html;
			res.text.should.match(/All recipes/);
			request
			.get('/' + recipe.id)
			.end(function(err, res){
			    res.should.have.status(200);
			    res.should.be.html;
			    res.text.should.match(/30/);
			    res.text.should.match(/serves/);
			    done();
			});
		});
	});

	// describe a test for DELETE
	it('should delete a SINGLE recipe on /<id> DELETE' , function(done) {
		var request = chai.request(app);
		request.delete('/' + recipe.id)
		.end(function(err, res){
		    res.should.have.status(200);
		    res.should.be.html;
		    res.text.should.match(/All recipes/);
		    request
				.get('/' + recipe.id)
				.end(function(err, res){
			        res.should.have.status(404);
			        done();
		    	});
		});
	});
});