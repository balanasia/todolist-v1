//jshint esverion:6

//asking the funciton to be called
exports.getDate = function() {
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
}
exports.getDay = function() {
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
}
