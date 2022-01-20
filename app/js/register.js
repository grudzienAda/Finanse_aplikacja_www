
USERS_URL = "http://localhost:8080/api/users/"

function goToPremainPage() {
    window.location.href = "premainPage.html";
}

function validate() {
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("password-repeat").value;

    if(password1 !== password2) {
        alert("Repeated password is different!");
    }
    else {
        addUser();
        window.location.href = "loginForm.html";
        alert("Successfully registered!");
    }
}

function addUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const urlString = USERS_URL + "add/?name=" + username + "&mail=" + email + "&password=" + password;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();

    
}