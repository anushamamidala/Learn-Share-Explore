
$(document).ready(function() {
    $.getJSON('./JavaScript/qna.json', function(data) {
      $.each(data.questions, function(key, value) {
        $('#interaction').append(
          '<h3>Q' +
            value.question +
            '</h2>' +
            '<p>ANS:' +
            value.Answer+
            '</p>'
        );
      });
    });

    $("#quesimg img").each(function() {
        var oldURL = $(this).attr("src");      
        var newURL = $(this).attr("id");       
        var rolloverImage = new Image();
        rolloverImage.src = newURL;
        $(this).hover(
            function() {
                $(this).attr("src", newURL);  
            },
            function() {
                $(this).attr("src", oldURL);   
            }
        );  
    });

    $('#cform').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var question = $('#question').val();
     
        $(".error").remove();
     
        if (name.length < 1) {
          $('#name').after('<span class="error">This field is required</span>');
        }
        
        if (email.length < 1) {
          $('#email').after('<span class="error">This field is required</span>');
        } 
        
        if (question.length<1){
            $('#question').after('<span class="error"><br/>This field is required</span>');
        }

        
      });
      $('#btnsubmit').click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var question = $('#question').val();
        localStorage.setItem('QuestionBy', name),
        localStorage.setItem('EmailTo', email),
        localStorage.setItem('Question', question)
        });

});