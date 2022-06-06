//jshint esverion:6

//initializing the libraries
const express = require("express");
const bodyParser = require("body-parser");

//assigning express to a constant
const app = express();

//getting the request from home route
app.get("/", function(req, res) {

  //initialize variable that will hold a date variable
  var today = new Date();
  //get today's day
  var currentDay = today.getDay();

  //checking if today is a weekend
  //6 for Saturday and 0 is for Sunday
  if (currentDay === 6 || currentDay === 0) {
    res.write("<h1>yay, it's the weekend!</h1>");
    res.send();
  } else {
    res.write("<p>It is not a weekend</p>");
    res.write("<h1>Boo! I have to work :c</h1>");
    res.send();
  }
});

//express is listening at port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
