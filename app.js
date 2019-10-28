var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.post("/",function(req,res)
{
    res.redirect("/");
});

app.get("/chinese", function(req, res){
    res.render("chinese");
});

app.post("/chinese",function(req,res)
{
    res.redirect("/chinese");
});

app.get("/contactus", function(req, res){
    res.render("contactus");
});

app.post("/contactus",function(req,res)
{
    res.redirect("/contactus");
});

app.get("/LogIn", function(req, res){
    res.render("LogIn");
});

app.post("/LogIn",function(req,res)
{
    res.redirect("/LogIn");
});

app.get("/north", function(req, res){
    res.render("north");
});

app.post("/north",function(req,res)
{
    res.redirect("/north");
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.post("/signup",function(req,res)
{
    res.redirect("/signup");
});

app.get("/south", function(req, res){
    res.render("south");
});

app.post("/south",function(req,res)
{
    res.redirect("/south");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The SWAD Server Has Started!");
 });