let previousActiveCourse;
let coursesList;
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 500) { 
            $('header').addClass('solid');
        } else {
            $('header').removeClass('solid');
        }
      });
    $.getJSON('./assets/data/course-list.json', function(data) {
    coursesList = data.coursesList;
    getFilteredListElements(coursesList);
    createCoursesList(coursesList);
});

$.getJSON('./modules/home/JSONData/comments.json', function(data){
    generateCommentsOnLoad(data.comments)
});
});

//filter the courses list and get unique departments
function getFilteredListElements(coursesList) {
    let filteredList= getFilteredList(coursesList);
    populateFilteredList(filteredList);
}

//populating unique departments on the web
function populateFilteredList(filteredList) {
    let coursesNavTab = document.getElementsByClassName('courses-nav-tab');
    filteredList.forEach(element => {
        let spanTag = document.createElement('span');
        spanTag.id = element;
        if (element == 'ALL') {
            previousActiveCourse = element;
            spanTag.className = 'active';
        }
        spanTag.onclick = function () { onFilterPopularCourses(element) };
        spanTag.textContent = element;
        coursesNavTab[0].appendChild(spanTag);
    });
}

//on click of the department courses list will be assigned to the particular department
function onFilterPopularCourses(course) {
    let filteredList = coursesList.filter(element => element.courseDepartment == course);
    let removeActiveStatus = document.getElementById(previousActiveCourse);
    removeActiveStatus.classList.remove('active');
    let setElement = document.getElementById(course);
    setElement.className = 'active';
    previousActiveCourse = course;
    if (filteredList.length > 0) {
        createCoursesList(filteredList);
    }
    else {
        createCoursesList(coursesList);
    }
}

//creates all the course cards
function createCoursesList(coursesList) {
    let courseCardsDiv = document.getElementsByClassName('course-cards');
    courseCardsDiv[0].innerHTML = '';
    coursesList.forEach(element => {
        let aHrefTag = document.createElement('a');
        aHrefTag.href = 'course-videos.htmL';

        let polaroidDiv = document.createElement('div');
        polaroidDiv.className = 'polaroid';

        let overlayDiv = document.createElement('div');
        overlayDiv.className = 'overlay';

        let overlayTextDiv = document.createElement('div');
        overlayTextDiv.className = 'overlay-text';

        let pOverlayText = document.createElement('p');
        pOverlayText.textContent = element.courseTitle;

        let pOverTextSmall = document.createElement('p');
        pOverTextSmall.className = 'overlay-text-small';
        pOverTextSmall.textContent = element.description;

        let imgSrc = document.createElement('img');
        imgSrc.src = element.imageSrc;
        imgSrc.alt = element.alt;
        imgSrc.style.width = '100%';

        let courseImageTitlediv = document.createElement('div');
        courseImageTitlediv.className = 'course-image-title';

        let courseTitleP = document.createElement('p');
        courseTitleP.className = 'course-title';
        courseTitleP.textContent = element.courseTitle;

        let courseTitlePre = document.createElement('pre');
        courseTitlePre.className = 'course-titile-tag';
        courseTitlePre.textContent = element.courseDepartment;

        courseCardsDiv[0].appendChild(aHrefTag);
        aHrefTag.appendChild(polaroidDiv);
        polaroidDiv.appendChild(overlayDiv);
        overlayDiv.appendChild(overlayTextDiv);
        overlayTextDiv.appendChild(pOverlayText);
        overlayTextDiv.appendChild(pOverTextSmall);
        polaroidDiv.appendChild(imgSrc);
        courseImageTitlediv.appendChild(courseTitleP);
        courseImageTitlediv.appendChild(courseTitlePre);
        polaroidDiv.appendChild(courseImageTitlediv);

    });
}

//creats review comments section
function generateCommentsOnLoad(comments){
    let reviewSectionDiv = document.getElementsByClassName('review-section');
    comments.forEach(element => {
        let reviewSectionCard = document.createElement('div');
        reviewSectionCard.className = 'review-section-card';

        let reviewContentP = document.createElement('p');
        reviewContentP.className = 'review-content';
        reviewContentP.textContent = element.comment;

        let reviewSectionImg = document.createElement('img');
        reviewSectionImg.className = 'review-section-img';
        reviewSectionImg.src = element.commenterPicture;

        reviewSectionDiv[0].appendChild(reviewSectionCard);
        reviewSectionCard.appendChild(reviewContentP);
        reviewSectionCard.appendChild(reviewSectionImg);
    })
}

function OnclickViewAllCourses() {
    window.location.href = "./modules/home/courses.html";
}