var express = require('express'),
	app = express();

var page = {
	page: "This in main pagewewe",
	content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, atque."
}

app.get("/", function(req, res){
	res.render("main.jade", page);
});

app.listen(3000, function(){
	console.log("Wroking on port 3000");
});