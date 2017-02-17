var User = require('../models/user');

function showUser(req, res) {
	User.findById(req.params.id , function(err, user) {
		if(!user) return res.status(404).send("Sorry Recipe not found!");
		if(err) return res.status(500).send(err);
		res.render("users/show" , {
      		title: "User",
    		user: user
    	});
	});
}

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
  create: createUser,
  show: showUser

}