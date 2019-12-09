$(document).ready(function () {
  $.getJSON('Python.json', function (data) {
    $.each(data.teammembers, function (key, value) {
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
    $.getJSON('Python.json', function (data) {
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


