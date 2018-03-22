$(document).ready(function() {
  var animal = (prompt('Which would you like to learn about today? Please write in either turtles, snakes, or insects.'));
  console.log(animal);
  if (animal === "turtles") {
    $('#turtles').show();
  } else if (animal === "snakes") {
    $('#snakes').show();
  } else {
    $('#insects').show();
  }
});
