
USERS_URL = "http://localhost:8080/api/users/"

function goToPremainPage() {
    window.location.href = "premainPage.html";
}

function validate() {
    var username = document.getElementById("username").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if(password1!=password2) {
        alert("Repeated password is different!");
    }
    else {
        window.location.href = "premainPage.html";
        alert("Succesfully registered!"); //nie wyswietla sie:(
    }
}

function addUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var urlString = USERS_URL + "add/?name=" + username + "&mail=" + email + "&password=" + password;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}