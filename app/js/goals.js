GOALS_URL = "http://localhost:8080/api/goals/"

function addGoal() {
    var name = document.getElementById("goalName").value;
    var goalStartDate = document.getElementById("goalStartDate").value;
    var goalEndDate = document.getElementById("goalEndDate").value;
    var userId;
    var familyId;


    var urlString = GOALS_URL + "add/?name=" + name + "&goalStartDate=" + goalStartDate + "&goalEndDate=" + goalEndDate + "&userId" + userId + "&familyId" + familyId;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}

//do poprawek (przekopiowane z family.js)
function add_payment_to_goal() {
    const email = document.getElementById("email-new-member").value;
    const familiesList = document.getElementById("families-list");

    const urlString = GOALS_URL + "add?mail=" + email + "&familyId=" + familiesList.value;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}

//do poprawek (przekopiowane z family.js)
function createGoalsList(elementId) {
    const selectList = document.getElementById(elementId);
    const urlString = GOALS_URL + "?userId=" + localStorage.getItem("userId");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlString, true);
    xhr.responseType = "json";

    xhr.onload = function() {
        const goals = xhr.response;
        for(let i = 0; i < goals.length; i++) {
            const item = goals[i];
            const option = document.createElement("option");
            option.text = item.familyName;
            option.value = item.familyId;
            selectList.add(option);
        }
    }
    xhr.send();
}