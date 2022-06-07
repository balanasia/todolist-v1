//jshint esverion:6

//initializing the libraries
const express = require("express");
const bodyParser = require("body-parser");

//assigning express to a constant
const app = express();

//global variable that will hold the user input
//that is passed to post and get methods
let items = [];

//specify the format for the BodyParser
app.use(bodyParser.urlencoded({extended:true}));
//declaring a static folder location for Express
app.use(express.static("public"));

//setthing the ejs view engine
app.set('view engine', 'ejs');

//getting the request from home route
app.get("/", function(req, res) {

  //initialize variable that will hold a date variable
  let today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);


  //render the list.ejs file
  //and pass in kindOfDay variable
  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

//express is listening at port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
