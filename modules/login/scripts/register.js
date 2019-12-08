let $ = function(id) {
    return document.getElementById(id);
}

let fname = $('firstname');
let lname = $('lastname');
let uname = $('username');
let pwd1 = $('password1');
let pwd2 = $('password2');
let emailID = $('email');
let contact = $('tel');
let pPattern = /(?=.*[a-z])(?=.*[A-Z]).{8,}/;
let uPattern = /(?=.*[a-zA-Z]).{6,}/;

let passwords = JSON.parse(localStorage.getItem('password')) || [];
let usernames = JSON.parse(localStorage.getItem('username')) || [];
/*validation function for registration form*/
function validation() {

    if (fname.value == "") {
        firstname.nextElementSibling.innerHTML = "*Please Enter firstname*";
        return false;
    } else if (!(/^[a-zA-Z ]+$/.test(fname.value))) {
        firstname.nextElementSibling.innerHTML = "*Please Enter letters only*";
        return false;
    } else if ((/^[a-zA-Z ]+$/.test(fname.value))) {
        firstname.nextElementSibling.innerHTML = "";
        if (lname.value == "") {
            lastname.nextElementSibling.innerHTML = "*Please Enter lastname*";
            return false;
        } else if (!(/^[a-zA-Z ]+$/.test(lname.value))) {
            lastname.nextElementSibling.innerHTML = "*Please Enter letters only*";
            return false;
        } else if ((/^[a-zA-Z ]+$/.test(fname.value))) {
            lastname.nextElementSibling.innerHTML = "";
            if (uname.value == "") {
                username.nextElementSibling.innerHTML = "*Please provide username*";
                return false;
            } else if (!uPattern.test(uname.value)) {
                username.nextElementSibling.innerHTML = "at least 6 characters required";
                return false;
            } else if (uPattern.test(uname.value)) {
                username.nextElementSibling.innerHTML = "";
                if (pwd1.value == '') {
                    password1.nextElementSibling.innerHTML = "*Please provide password*";
                    return false;
                } else if (!pPattern.test(pwd1.value)) {
                    password1.nextElementSibling.innerHTML = "at least 8 characters, lower & upper case req."
                    return false;
                } else if (pPattern.test(pwd1.value)) {
                    password1.nextElementSibling.innerHTML = "";
                    if (pwd2.value == '') {
                        password2.nextElementSibling.innerHTML = "*Please retype password*";
                        return false;
                    } else if (!(pwd1.value == pwd2.value)) {
                        password2.nextElementSibling.innerHTML = "*passwords does not match*"
                        return false;
                    } else if ((pwd1.value == pwd2.value)) {
                        password2.nextElementSibling.innerHTML = "";
                        if (emailID.value == '') {
                            email.nextElementSibling.innerHTML = "*Please provide email account*";
                            return false;
                        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value))) {
                            email.nextElementSibling.innerHTML = "*Invalid email account *"
                            return false;
                        } else if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value))) {
                            email.nextElementSibling.innerHTML = "";
                            if (contact.value == '') {
                                tel.nextElementSibling.innerHTML = "*Please provide contact number*";
                                return false;
                            } else if (!(/^\d{10}$/.test(tel.value))) {
                                tel.nextElementSibling.innerHTML = "*It should be of 10 digits *"
                                false
                            } else {
                                /*local storage*/
                                usernames.push($('username').value);
                                passwords.push($('password1').value);
                                localStorage.setItem("username", JSON.stringify(usernames));
                                localStorage.setItem("password", JSON.stringify(passwords));
                                //return true;
                                alert("Successfully Registered !");

                            }

                        }
                    }

                }

            }
        }
    }

}