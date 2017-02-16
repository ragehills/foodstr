var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = require('./config/routes');
var mongoose = require('mongoose');
var layouts = require('express-ejs-layouts');


mongoose.connect('mongodb://localhost/recipes', function() {
	console.log('database connected.')
})






app.set('view engine', 'ejs');
app.use(layouts);


app.use(router);

app.listen(port, function() {
	console.log("The server is on and listening on port " + port);
});
 	
module.exports = app