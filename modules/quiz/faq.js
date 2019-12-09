$(document).ready(function() {
	
	$("#faq h4").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideToggle(1000);
	    }
    ); // end click


}); // end ready
