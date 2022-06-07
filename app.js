//jshint esverion:6

//initializing the libraries
const express = require("express");
const bodyParser = require("body-parser");

//assigning express to a constant
const app = express();

//setthing the ejs view engine
app.set('view engine', 'ejs');

//getting the request from home route
app.get("/", function(req, res) {

  //initialize variable that will hold a date variable
  var today = new Date();
  //get today's day
  var currentDay = today.getDay();

  //emtpy string to hold a day value
  var day = "";

  switch(currentDay) {
    case 0:
      day="Sunday";
    break;

    case 1:
      day="Monday";
    break;

    case 2:
      day="Tuesday";
    break;

    case 3:
      day="Wednesday";
    break;

    case 4:
      day="Thursday";
    break;

    case 5:
      day="Friday";
    break;

    case 6:
      day="Saturday";
    break;

    default:
      console.log("Error! Day is" + currentDay);

  }//end switch statement

  //render the list.ejs file
  //and pass in kindOfDay variable
  res.render("list", {kindOfDay: day});
});

//express is listening at port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
