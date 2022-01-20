USERS_URL = "http://localhost:8080/api/families/"

function createFamily() {
    var name = document.getElementById("newFamilyName").value;
    var email = document.getElementById("userEmail").value;
    var familyId;

    var urlString = USERS_URL + "add/&name=" + name + "mail=" + email;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}

function addUserToFamily() {
    var email = document.getElementById("email_new_member").value;
    var familyId;

    var urlString = USERS_URL + "add/&mail=" + email + "&familyId=" + familyId;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}