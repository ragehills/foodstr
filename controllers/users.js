var User = require('../models/user');

// function showRecipes(req, res) {
// 	Recipe.findById(req.params.id , function(err, recipe) {
// 		if(!recipe) return res.status(404).send("Sorry Recipe not found!");
// 		if(err) return res.status(500).send(err);
// 		res.render("users/show" , {
      		
//     	});
// 	});
// }

// NEW ( Registration )
function newUser(req,res) {

  res.render('users/new' , {title:"Register"});

}

// CREATE - Handles registrations
function createUser(req,res){
  var user = new User(req.body);
  user.save(function(err,user){
    if(err) req.flash('error' , err.message);
    res.redirect("/");
  });
}

module.exports = {
  new: newUser,
  create: createUser
}