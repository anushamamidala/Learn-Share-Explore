"use strict";
/* function for search in table*/
function searchTopic() {
    let filter = document.getElementById('input').value.toUpperCase();
    let myTable = document.getElementById('tableTopics');
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";

            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

/* array which provides overviews dynamically on clicking*/
let array = [
    "Software engineering sees its practitioners as individuals who follow well-defined engineering approaches to problem-solving. These approaches are specified in various software engineering books and research papers, always with the connotations of predictability, precision, mitigated risk and professionalism. This perspective has led to calls[by whom?] for licensing, certification and codified bodies of knowledge as mechanisms for spreading the engineering knowledge and maturing the field.Software craftsmanship has been proposed by a body of software developers as an alternative that emphasizes the coding skills and accountability of the software developers themselves without professionalism or any prescribed curriculum leading to ad-hoc problem-solving (craftmanship) without engineering (lack of predictability, precision, missing risk mitigation, methods are informal and poorly defined). The Software Craftsmanship Manifesto extends the Agile Software Manifesto and draws a metaphor between modern software development and the apprenticeship model of medieval Europe.",
    "A software requirements specification (SRS) is a description of a software system to be developed. It is modeled after business requirements specification (CONOPS), also known as a stakeholder requirements specification (StRS).[citation needed] The software requirements specification lays out functional and non-functional requirements, and it may include a set of use cases that describe user interactions that the software must provide to the user for perfect interaction.Software requirements specification establishes the basis for an agreement between customers and contractors or suppliers on how the software product should function (in a market-driven project, these roles may be played by the marketing and development divisions). Software requirements specification is a rigorous assessment of requirements before the more specific system design stages, and its goal is to reduce later redesign. It should also provide a realistic basis for estimating product costs, risks, and schedules. Used appropriately, software requirements specifications can help prevent software project failure.The software requirements specification document lists sufficient and necessary requirements for the project development. To derive the requirements, the developer needs to have clear and thorough understanding of the products under development. This is achieved through detailed and continuous communications with the project team and customer throughout the software development process",
    "Software design is the process of envisioning and defining software solutions to one or more sets of problems. One of the main components of software design is the software requirements analysis (SRA). SRA is a part of the software development process that lists specifications used in software engineering. If the software is semi-automated or user centered, software design may involve user experience design yielding a storyboard to help determine those specifications. If the software is completely automated (meaning no user or user interface), a software design may be as simple as a flow chart or text describing a planned sequence of events. There are also semi-standard methods like Unified Modeling Language and Fundamental modeling concepts. In either case, some documentation of the plan is usually the product of the design. Furthermore, a software design may be platform-independent or platform-specific, depending upon the availability of the technology used for the design. The main difference between software analysis and design is that the output of a software analysis consists of smaller problems to solve. Additionally, the analysis should not be designed very differently across different team members or groups. In contrast, the design focuses on capabilities, and thus multiple designs for the same problem can and will exist. Depending on the environment, the design often varies, whether it is created from reliable frameworks or implemented with suitable design patterns. Design examples include operation systems, webpages, mobile devices or even the new cloud computing paradigm.",
    "The need to reduce complexity is mainly driven by limited ability of most people to hold complex structures and information in their working memories. Reduced complexity is achieved through emphasizing the creation of code that is simple and readable rather than clever. Minimizing complexity is accomplished through making use of standards, and through numerous specific techniques in coding. It is also supported by the construction-focused quality techniques",
    "An integral part of software is the maintenance one, which requires an accurate maintenance plan to be prepared during the software development. It should specify how users will request modifications or report problems. The budget should include resource and cost estimates. A new decision should be addressed for the developing of every new system feature and its quality objectives. The software maintenance, which can last for 5–6 years (or even decades) after the development process, calls for an effective plan which can address the scope of software maintenance, the tailoring of the post delivery/deployment process, the designation of who will provide maintenance, and an estimate of the life-cycle costs. The selection of proper enforcement of standards is the challenging task right from early stage of software engineering which has not got definite importance by the concerned stakeholders.",
    "A software requirements specification (SRS) is a description of a software system to be developed. It is modeled after business requirements specification (CONOPS), also known as a stakeholder requirements specification (StRS).[citation needed] The software requirements specification lays out functional and non-functional requirements, and it may include a set of use cases that describe user interactions that the software must provide to the user for perfect interaction.Software requirements specification establishes the basis for an agreement between customers and contractors or suppliers on how the software product should function (in a market-driven project, these roles may be played by the marketing and development divisions). Software requirements specification is a rigorous assessment of requirements before the more specific system design stages, and its goal is to reduce later redesign. It should also provide a realistic basis for estimating product costs, risks, and schedules. Used appropriately, software requirements specifications can help prevent software project failure.The software requirements specification document lists sufficient and necessary requirements for the project development. To derive the requirements, the developer needs to have clear and thorough understanding of the products under development. This is achieved through detailed and continuous communications with the project team and customer throughout the software development process"
];



function hide() {
    $('#answer-area').hide();
}

function show() {
    $('#answer-area').show();
}
let ans = ""

function getDescription(index) {
    show(); /*calls show function to show the container for overview*/
    ans = "";
    ans = ans + array[index];
    document.getElementById('readArea').innerHTML = ans;
}

let topics = ["The Scope of software engineering",
    "Analysis Software requirements engineering",
    "Software design",
    "Discrete Software construction",
    "Software Maintenance",
    "Engineering process of software"
];

let i;
/* ratings*/
let rating = "";
let c = 0;
let avgrate;
window.onload = onLoadContent;
/* function displays the provided content in the blog page head*/
function onLoadContent() {
    $('#answer-area').hide(); /*on load the overview container is hided*/
    for (i = 0; i < topics.length; i++)
        document.getElementById(i).innerHTML = topics[i]; /* displays the table topics dynamicaally on load */


    /*for displaying the viewers count*/
    let u = JSON.parse(localStorage.getItem('numUsers')); /*get count of viewers from local storage*/
    if (u != null) {
        u = parseInt(u) + 1; /*by default it stores 0 for first viewer*/
        document.getElementById('viewers').innerHTML = u;
    } else {
        document.getElementById('viewers').innerHTML = "0";
    }

    /*for displaying the ratings */
    u = parseInt(u) + 1; /*incremented by 1 coz it by default stores 0 for first viewer*/
    let onloadrate = JSON.parse(localStorage.getItem('ratings'));
    if (onloadrate != null) {
        c = JSON.parse(onloadrate)
        avgrate = c / u;
        document.getElementById('rate').innerHTML = Number(Math.round(avgrate + 'e1') + 'e-1');

    } else {
        document.getElementById('rate').innerHTML = "0.0";
    }

}

/*function for stars*/
function starmark(item) {
    var count = item.id[0];
    rating = count;

    var subid = item.id.substring(1);
    for (var i = 0; i < 5; i++) {
        if (i < count) {
            document.getElementById((i + 1) + subid).style.color = "orange";


        } else {
            document.getElementById((i + 1) + subid).style.color = "black";
        }
    }
}

/*function that  set ratings*/
let userCount = 0;

function setRating() {

    if (rating == "") /* for span item to show feedback message*/
        document.getElementById('thanks-rating').innerHTML = "We are sorry for this disappointment!!";

    /* to calculate ratings*/
    if (rating != "") { /*if ratings given by user are not null*/

        let u = JSON.parse(localStorage.getItem('numUsers'));
        if (u != null) {
            userCount = parseInt(u) + 1; /* increment the viewers and stores the new value*/
            localStorage.setItem("numUsers", JSON.stringify(parseInt(userCount)));
        } else { /* stores the same value*/
            localStorage.setItem("numUsers", JSON.stringify(parseInt(userCount)));
        }
        let onloadrate = JSON.parse(localStorage.getItem('ratings'));
        if (onloadrate != null) {

            localStorage.setItem("ratings", JSON.stringify((parseInt(rating) + parseInt(onloadrate))));
        } else
            localStorage.setItem("ratings", JSON.stringify(parseInt(rating)));
        document.getElementById('thanks-rating').innerHTML = "Thanks for your feedback !!";
    } else { /* if ratings given are null*/
        let u = JSON.parse(localStorage.getItem('numUsers')); /*increments that viewer who given 0 rating*/
        userCount = parseInt(u) + 1;
        localStorage.setItem("numUsers", JSON.stringify(parseInt(userCount))); /*stores new value of viewers*/
        localStorage.setItem("ratings", JSON.stringify(parseInt(onloadrate))); /*stores same value of ratings as it is to local storage*/

    }
}

/*slider */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/* more information json data*/
$(document).ready(function() {
    $.getJSON("moreInfo.json", function(data) {
        var info = '';
        $.each(data, function(key, value) {
            info += '<tr>';
            info += '<td>' + value.lang + '</td>';
            info += '<td>' + value.cert + '</td>';
            info += '<td>' + value.job + '</td>';
            info += '</tr>';
        });
        $('#more-info-table').append(info);
    });
});