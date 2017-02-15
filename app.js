var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var router = require('./config/routes');




app.use(router);

app.listen(port, function() {
	console.log("The server is on and listening on port " + port);
});


 	
