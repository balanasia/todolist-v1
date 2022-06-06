//jshint esverion:6

//initializing the libraries
const express = require("express");
const bodyParser = require("body-parser");

//assigning express to a constant
const app = express();

//getting the request from home route
app.get("/", function(req, res) {
  res.send("Hello!");
});

//express is listening at port 3000
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
