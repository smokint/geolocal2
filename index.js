var express = require("express");
var app = express();


// route routing is very easy with express, this will handle the request for root directory contents.
// :id is used here to pattern match with the first value after the forward slash.

app.get("/", function (req,res){
	
		res.render("index.ejs");
	});
	

app.listen(9999);
console.log();