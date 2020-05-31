
var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors);
var output = "Hello Irina Ashleigh Etza ";
expect(output).toEqual(result);


});
