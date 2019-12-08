'use strict';

$(document).ready(function() {
  //alert(localStorage.getItem('name'));
  localStorage.removeItem('name');
  $('#b1').click(function() {
    var textbox = $('#q1');
    var textbox1= $('#name1');
    var textbox2= $('#subject1');
    
    var task = textbox.val();
    var task1 = textbox1.val();
    var task2 = textbox2.val();
    if (task1 === '') {
      alert('Please enter your name.');
      textbox1.focus();
    } else if (task2 === '') {
        alert('Please enter your subject.');
        textbox2.focus();
      } else if (task === '') {
        alert('Please enter your question.');
        textbox.focus();
      } else {
      // add task to web storage

      let name = 'puja';
      localStorage.setItem('name', name);

      var tasks = localStorage.C15tasks || ''; // default value of empty string
      var t1 = tasks.concat('Name: '+ task1 , '\n');
      var t2 = t1.concat('Subject: ',task2 , '\n');
      localStorage.C15tasks = t2.concat('Question: '+ task, '\n'+'\n');

      // clear task text box and re-display tasks
      textbox.val('');
      $('#text2').val(localStorage.C15tasks);
      textbox.focus();
    }
  });



  $('#b2').click(function() {
    var textbox = $('#text1');
    var textbox1= $('#name1');
    var textbox2= $('#subject1');

    var task = textbox.val();
    var task1 = textbox1.val();
    var task2 = textbox2.val();
    if (task1 === '') {
        alert('Please enter your name.');
        textbox1.focus();
      } else if (task2 === '') {
          alert('Please enter your subject.');
          textbox2.focus();
        } else if (task === '') {
          alert('Please enter your answer.');
          textbox.focus();
        } else {
      // add task to web storage

      let name = 'puja';
      localStorage.setItem('name', name);

     var tasks = localStorage.C15tasks || ''; // default value of empty string
      var t1 = tasks.concat('Name: '+ task1 , '\n');
      var t2 = t1.concat('Subject: ',task2 , '\n');
      localStorage.C15tasks = t2.concat('Answer: '+ task, '\n'+'\n');

      // clear task text box and re-display tasks
      textbox.val('');
      $('#text2').val(localStorage.C15tasks);
      textbox.focus();
    }
  });



  // display tasks on initial load
  $('#text2').val(localStorage.C15tasks);
  $('#name1').focus();
});