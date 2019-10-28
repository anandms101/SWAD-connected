var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});


app.get("/chinese", function(req, res){
    res.render("chinese");
});

app.get("/contactus", function(req, res){
    res.render("contactus");
});

app.get("/LogIn", function(req, res){
    res.render("LogIn");
});

app.get("/north", function(req, res){
    res.render("north");
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.get("/south", function(req, res){
    res.render("south");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
 });