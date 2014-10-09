$(function(){
  var avengers_arr = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

  // Code goes here!
  var assemble = function(array) {
    var $myUl = $("<ul id='avengers'></ul>");
    var $body = $('body');
    $body.append($myUl);
    var avenger_class;

    for (var i = 0; i < avengers_arr.length; i++) {
      avenger_class = avengers_arr[i]
        .toLowerCase()
        .replace(/\s+/g, '');

      var $li = $("<li class=" + avenger_class + "></li>")
        .text(avengers_arr[i])
        .appendTo($myUl);
    }
  };
  assemble(avengers_arr);
  //remove antman and wasp
  //add captain america
  var remove = function(avenger) {
      
      $('li').remove("." + avenger +"");

  };

  var add = function(avenger) {
    
      $("#avengers").append("<li class=" + avenger + ">" + avenger + "</li>");
  };

  remove("antman");
  remove("wasp");
  add("Captain America");
 
});

