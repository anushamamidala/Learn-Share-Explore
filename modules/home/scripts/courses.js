$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) { 
            $('header').addClass('solid');
        } else {
            $('header').removeClass('solid');
        }
      });
    $.getJSON('../../assets/data/course-list.json', function(data) {
    coursesList = data.coursesList;
    createCoursesList(coursesList);
    CreateDropDownList(coursesList);
});
});

function createCoursesList(coursesList) {
    let myCourseCards = document.getElementsByClassName("my-courses-cards");
    myCourseCards[0].innerHTML = '';
    coursesList.forEach(element => {
        let reference = createDocumentElement('a');
        reference.href = "course-videos.html";

        let courseCardDiv = createDocumentElement('div');
        courseCardDiv.className = "courses-course-card";

        if (!element.isTrending) {
            myCourseCards[0].appendChild(reference);
            reference.appendChild(courseCardDiv);
        }
        else {
            myCourseCards[1].appendChild(reference);
            reference.appendChild(courseCardDiv);
        }

        createCourseCard(courseCardDiv,element);
    });
}

function createDocumentElement(element){
    return document.createElement(element);
}

//creates course card 
function createCourseCard(courseCardDiv,element){
    let imageSource = createDocumentElement('img');
        imageSource.src = '../..' + element.imageSrc.toString().slice(1);
        imageSource.alt = element.courseTitle;
        imageSource.className = "course-card-img";

        let progressDiv = createDocumentElement('div');
        let progressBar = createDocumentElement('div');
        if(element.progressWidth != '0%'){
            progressDiv.className = "progress";
            progressBar.className = "bar";
            progressBar.style.width = element.progressWidth;
        }
        let paraTitle = createDocumentElement('p');
        paraTitle.className = "course-card-title";
        paraTitle.textContent = element.courseTitle;

        let icon = createDocumentElement('i');
        icon.className = "far fa-bookmark"

        paraTitle.appendChild(icon);
        if(element.progressWidth != '0%'){
        progressDiv.appendChild(progressBar);
        }
        courseCardDiv.appendChild(imageSource);
        if(element.progressWidth != '0%'){
        courseCardDiv.appendChild(progressDiv);}
        courseCardDiv.appendChild(paraTitle);
}

//creates select dropdown list
function CreateDropDownList(coursesList){
    let filteredList= getFilteredList(coursesList);
    populateFilteredList(filteredList);
}

//populating filtered courses
function populateFilteredList(filteredList) {
    let coursesNavTab = document.getElementsByClassName('my-courses-category-select');
    filteredList.forEach(element => {
        let optionTag = document.createElement('option');
        optionTag.id = element;
        optionTag.textContent = element
        if (element == 'ALL') {
            previousActiveCourse = element;
        }        
        coursesNavTab[0].appendChild(optionTag);
    });
}

//on select from dropdown it filters courses
function ChangeSelectedOptions(){
    var selectedValue = document.getElementsByClassName("my-courses-category-select")[0].value;
    if(selectedValue!="ALL"){
        let filteredList = coursesList.filter(element => element.courseDepartment == selectedValue);
        createCoursesList(filteredList);
    }
    else{
        createCoursesList(coursesList);
    }
}
