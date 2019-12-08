"use strict";
/*function which get values form login form*/
function getValues() {
    var pass = document.getElementById('pass').value;
    var user = document.getElementById('user').value;
    let checkuser = localStorage.getItem('username');
    let checkpass = localStorage.getItem('password');

    let i, j;
    /*to compare data store with input values*/
    if (checkuser != null || checkpass != null) {
        for (i = 0; i < checkuser.length; i++) {
            if (user == (JSON.parse(checkuser)[i])) {
                for (j = 0; j < checkpass.length; j++)
                    if (pass == (JSON.parse(checkpass)[j]))
                        window.location.href = "http://127.0.0.1:5500/project-alpha/modules/home/index.html"
                        /*return true;*/
            }
        }
        for (i = 0; i < checkuser.length; i++) {
            if (user != (JSON.parse(checkuser)[i])) {
                document.getElementById('span').innerHTML = "   Invalid username or password !!";
                return false;
            }
        }

    } else {
        document.getElementById('span').innerHTML = " Invalid login !!";
        return false;
    }
}