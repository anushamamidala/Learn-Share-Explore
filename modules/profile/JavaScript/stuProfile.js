$(document).ready(function() {
    $("#imgChan img").each(function() {
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
    $()
    function mysub()
    {
    localStorage.setItem("name","Navdeep Singh")
    localStorage.setItem("UserID","navdeeeep");
    localStorage.setItem("email","navdeeeep@gmail.com");
    document.getElementById("d1").innerHTML = localStorage.getItem("name");
    document.getElementById("d2").innerHTML = localStorage.getItem("UserID");
    document.getElementById("d3").innerHTML = localStorage.getItem("email");
    }
    mysub();

});