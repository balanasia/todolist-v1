//jshint esverion:6

//initializing the libraries
const express = require("express");
const bodyParser = require("body-parser");

//require date module
const date = require(__dirname + "/date.js");


//assigning express to a constant
const app = express();

//global variable that will hold the user input
//that is passed to post and get methods
let items = [];
let workItems = [];

//specify the format for the BodyParser
app.use(bodyParser.urlencoded({extended:true}));
//declaring a static folder location for Express
app.use(express.static("public"));

//setthing the ejs view engine
app.set('view engine', 'ejs');

//getting the request from home route
app.get("/", function(req, res) {

  let day = date.getDate();

  //render the list.ejs file
  //and pass in kindOfDay variable
  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

  let item = req.body.newItem;

//checks if the item is added
//to the work list or to regular list
//and redirects to porper list
  if(request.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List ", newListItems: workItems});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redicrect("/");
});

//express is listening at port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
