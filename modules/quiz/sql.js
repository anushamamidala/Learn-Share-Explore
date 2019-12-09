$(document).ready(function() {
    $.getJSON('sql.json', function(data) {
      $.each(data.teammembers, function(key, value) {
        val = data;
      $('#form').append(
        '<div class="grid-container">' +
        '<p class="qNo">' + value.Question + '</p>' +
        '<br>' +
        '<p class="question">' + value.Q + '</p>' +
        '<br>' +
        demo(value.Options, key) +
        '</div>'
      );
    });
  });
});

//function to display options
function demo(Options, key) {
  let count = 1;
  let temp = '';
  Options.map((elem, optVal) => {
    temp += `<ul class=\'answer\'><li><div class=\"grid_item\"><input type=\"radio\" class='radsel' id=\"r${count}\" name=\"${key + 1}\" value=\"${optVal}\"><label for=\"r${count}\">${elem}</label></div></li> </ul>`
  });
  
  return temp;
 
}


//retrieving and comparing the answers to produce required output

function check() {
 

  let correctAnswers = [];
  

  $('form').serializeArray().map((ob) => {

    $.getJSON('sql.json', function (data) {
      $.each(data.teammembers, function (key, value) {
        if (value["id"] == ob["name"]) {
          console.log(value);
          console.log(ob);
          if (value["Answer"] == ob["value"])
            correctAnswers.push(value["id"]);
        }
      });
    });
  });
  setTimeout(() => {
    console.log(correctAnswers.length)
    document.getElementById("marks").innerHTML = "Total Correct Answers are:  " + correctAnswers.length;
  }, 2000);



 

}



function equals(x, y) {
  // If both x and y are null or undefined and exactly the same
  if (x === y) {
    return true;
  }

  // If they are not strictly equal, they both need to be Objects
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  // They must have the exact same prototype chain, the closest we can do is
  // test the constructor.
  if (x.constructor !== y.constructor) {
    return false;
  }

  for (var p in x) {
    // Inherited properties were tested using x.constructor === y.constructor
    if (x.hasOwnProperty(p)) {
      // Allows comparing x[ p ] and y[ p ] when set to undefined
      if (!y.hasOwnProperty(p)) {
        return false;
      }

      // If they have the same strict value or identity then they are equal
      if (x[p] === y[p]) {
        continue;
      }

      // Numbers, Strings, Functions, Booleans must be strictly equal
      if (typeof (x[p]) !== "object") {
        return false;
      }

      // Objects and Arrays must be tested recursively
      if (!equals(x[p], y[p])) {
        return false;
      }
    }
  }

  for (p in y) {
    // allows x[ p ] to be set to undefined
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false;
    }
  }
  return true;
}


