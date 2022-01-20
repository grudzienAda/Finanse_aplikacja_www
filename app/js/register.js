
USERS_URL = "http://localhost:8080/api/users/"

function goToPremainPage() {
    window.location.href = "premainPage.html";
}

function validate() {
    const username = document.getElementById("username").value;
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("password-repeat").value;

    if(password1 !== password2) {
        alert("Repeated password is different!");
    }
    else {
        addUser();
        window.location.href = "loginForm.html";
        alert("Successfully registered!"); //nie wyswietla sie:(
    }
}

function addUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password-repeat").value;

    if(password!=password2) {
        alert("Repeated password is different!");
    }
    else {
        var urlString = USERS_URL + "add?name=" + username + "&mail=" + email + "&password=" + password;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", urlString, true);
        xhr.send();
        window.location.href = "premainPage.html";
        alert("Succesfully registered!"); //nie wyswietla sie:(
    }

    
}