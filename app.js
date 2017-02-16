var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = require('./config/routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var layouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'spartasupersecretkey'
}));

app.use(flash());


app.use(function(req, res, next){
    res.locals.errors = req.flash('error');
    console.log(res.locals.errors);
    next();
});

mongoose.connect('mongodb://localhost/recipes', function() {
	console.log('database connected.')
})


app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
app.use(bodyParser.json());

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.set('view engine', 'ejs');
app.use(layouts);


app.use(router);

app.listen(port, function() {
	console.log("The server is on and listening on port " + port);
});
 	
module.exports = app