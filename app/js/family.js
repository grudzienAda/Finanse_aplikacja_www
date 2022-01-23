FAMILIES_URL = "http://localhost:8080/api/families/"

function createFamily() {
    const name = document.getElementById("newFamilyName").value;
    const email = localStorage.getItem("userMail");

    const urlString = FAMILIES_URL + "createFamily?name=" + name + "&mail=" + email;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}

function addUserToFamily() {
    const email = document.getElementById("email-new-member").value;
    const familiesList = document.getElementById("families-list");

    const urlString = FAMILIES_URL + "add?mail=" + email + "&familyId=" + familiesList.value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}


function createFamiliesList(elementId) {
    const selectList = document.getElementById(elementId);
    const urlString = FAMILIES_URL + "?userId=" + localStorage.getItem("userId");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlString, true);
    xhr.responseType = "json";

    xhr.onload = function() {
        const families = xhr.response;
        for(let i = 0; i < families.length; i++) {
            const item = families[i];
            const option = document.createElement("option");
            option.text = item.familyName;
            option.value = item.familyId;
            selectList.add(option);
        }
    }
    xhr.send();
}