$(document).ready(function() {
    $.getJSON('jQuery.json', function(data) {
      $.each(data.teammembers, function(key, value) {
        $('#start').append(
          ' ' +
          '<p class="qNo">'+ value.Question+ '</p>' +
          '<br>' +
          '<p class="question">'+ value.Q +'</p>' +
          '<br>' +
          '<div class="grid-container">' + '<form id="form1">'+
          //'for( int j=0; j<4 ;j++){    <ul class="answer">  <li><div class="grid_item"><input type="radio"><label>' + value.Options[j] + '</label></div></li><br /></ul></form></div>    }'+
          demo(value.Options) +
          '<br><br>'
        );
      });
    });
  });


  function demo(Options) {
    let temp = '';
    for (let t of Options) {
      temp += '<li> <input type="radio" id="r1" name="ques" value="'+ value.Options1 + '"><label for="r1">' + t + '</label></div></li><br/>';
    }
    //document.getElementById('start').innerHTML = temp;
  }

      

  