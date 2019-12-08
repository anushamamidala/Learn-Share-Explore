"use strict";

/*function that loads on loading web page*/
window.onload = yourfunction;


/* function displays the provided content in the blog page head*/
function yourfunction() {
    document.getElementById('onloadcontent').innerHTML = "WELCOME TO TECHNICAL WORLD TO EXPLORE YOUR KNOWLEDGE !";
}

/*on hover the color changes of the body text*/
document.addEventListener('mouseover', function() {
    document.body.style.color = 'red';
});

/*array to store the answers of blog questions*/
var arr = ["Html is not considered a programming language because of the following reasons- It is just a markup language based on predefined syntaxes. The most important reason is that it does not involve compiling criteria .for eg- c/c++ is all based on compiler understanding while html has no direct interaction with compiler",
    "CSS is spreadsheet used for styling.CSS code is a programming language used in website design and in the creation of HTML templates. It is used to format the look and format of a web page, setting design elements such as the basic layout, colors, and fonts. CSS allows for greater continuity between different web pages on a site and makes the development",
    "JavaScript is a programming language used to make web pages interactive. It is what gives a page life—the interactive elements and animation that engage a user. If you've ever used a search box on a home page, checked a live baseball score on a news site, or watched a video, it has likely been produced by JavaScript.",
    "Stack. Because of its LIFO (Last In First Out) property it remembers its 'caller' so knows whom to return when the function has to return. Recursion makes use of system stack for storing the return addresses of the function calls.Every recursive function has its equivalent iterative (non-recursive) function. Even when such equivalent iterative procedures are written, explicit stack is to be used.",
    "While working at IBM, E.F. Codd created the relational database model. A paper he published in 1970 presented his ideas to the world at large. His work is the foundation for most of the DBMSs currently in use, and thus forms the basis for database systems as we know and use them today.",
    "With respect to multithreading, synchronization is the capability to control the access of multiple threads to shared resources. Without synchronization, it is possible for one thread to modify a shared object while another thread is in the process of using or updating that object's value. This often leads to significant errors.",
    ".NET Framework provides enormous advantages to software developers in comparison to the advantages provided by other platforms. Microsoft has united various modern as well as existing technologies of software development in .NET Framework. These technologies are used by developers to develop highly efficient applications for modern as well as future business needs. The following are the key components of .NET Framework."

];

var a;
/*functions to provide the answers dynamically from array indexes*/

function ans(id, index) {
    a = "";
    a = a + arr[index];
    document.getElementById(id).innerHTML = a;

}

/*function ans1() {
    a = "";
    a = a + arr[0];
    document.getElementById('ans1').innerHTML = a;
}

function ans2() {
    a = "";
    a = a + arr[1];
    document.getElementById('ans2').innerHTML = a;
}*/

/*function ans3() {
    a = "";
    a = a + arr[2];
    document.getElementById('ans3').innerHTML = a;
}

function ans4() {
    a = "";
    a = a + arr[3];
    document.getElementById('ans4').innerHTML = a;
}

function ans5() {
    a = "";
    a = a + arr[4];
    document.getElementById('ans5').innerHTML = a;
}

function ans6() {
    a = "";
    a = a + arr[5];
    document.getElementById('ans6').innerHTML = a;
}

function ans7() {
    a = "";
    a = a + arr[6];
    document.getElementById('ans7').innerHTML = a;
}*/