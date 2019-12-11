function getFilteredList(coursesList) {
    let coursesDepartmentList = [];
    coursesList.forEach(element => {
        coursesDepartmentList.push(element.courseDepartment);
    });
    let courseList = (coursesDepartmentList) => coursesDepartmentList.filter(
        (v, i) => coursesDepartmentList.indexOf(v) === i);
    let filteredList = courseList(coursesDepartmentList);
    filteredList.unshift("ALL");
    return filteredList;
}

function setUserName(){
    let getUserName = localStorage.getItem('loggedInUser');
    let navTabName = document.getElementById("navChange");
    let aHrefTag = document.createElement('a');
    if(getUserName!=null){
        aHrefTag.href = "./modules/profile/profileStu.html";
        aHrefTag.textContent = "Hi " + getUserName +"!";
        navTabName.appendChild(aHrefTag);
        return true;
    }
    else{
        aHrefTag.href = "./modules/login/login.html";
        aHrefTag.textContent = "LOGIN/SIGNUP";
        navTabName.appendChild(aHrefTag);
        return false;
    }
    return false; 
}