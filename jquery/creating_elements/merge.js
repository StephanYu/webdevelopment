var a = [0,1,2],
    b = [3,4,5],
    c = [6,7,8];

var d = $.merge ($.merge(a, b),c);


// Use $.map() to modify the provided array so that it only contains even values.
var numbers = [23, 44, 45, 1, 0, 700, 9001];

numbers = $.map(numbers, function(item, index) {
  if (item % 2 === 0)
    return item;
});

var greetings = ["hey", "hi", "hello", "yo"];

greetings = greetings.filter(function(value) {
  return value.length !== 2;
});