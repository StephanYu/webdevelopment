var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];


$(function() {
  $.merge(oldGuardians, newGuardians);
  // Use map to make an array of all of the keys in your new array of objects
  var arr = [];
  var oldGuardians_copy = $.map(oldGuardians, function(item, index) {
    $.map(item, function(value, key) {
      arr.push(key);
    });
  });

  var unique = arr.filter(function(itm,i,arr){
    return i == arr.indexOf(itm);
  });

  // create table 
  var create_table = function() {
    var $mytable = $("<table></table>");
    $("body").append($mytable);
    for (var i = 0; i < unique.length; i++) {
      $mytable.append("<th>" + unique[i] + "</th>");
    }
  };
  
  // insert table rows
  var insert_rows = function(array) {
    $.map(array, function(item, index) {
      if (item.notes === undefined) {
        item.notes = "n/a";
        $('table').append("<tr><td>" + item.name + "</td><td>" + item.notes + "</td></tr>");
      } else {
      $('table').append("<tr><td>" + item.name + "</td><td>" + item.notes + "</td></tr>");
      }
    });
  };

  //sort array of objects by name
  function SortByName(a, b){
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase(); 
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }

  oldGuardians.sort(SortByName);
  create_table();
  insert_rows(oldGuardians);
  
});

  
// Use a CSS framework to make your table cool
// Create two tables, one for each array of objects, and add a button that combines them into a single table.



