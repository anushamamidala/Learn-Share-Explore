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