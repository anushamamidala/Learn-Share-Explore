$(document).ready(function() {
    setUserName()
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) { 
            $('header').addClass('solid');
        } else {
            $('header').removeClass('solid');
        }
      });
});