USERS_URL = "http://localhost:8080/api/goals/"

function addGoal() {
    var name = document.getElementById("goalName").value;
    var goalStartDate = document.getElementById("goalStartDate").value;
    var goalEndDate = document.getElementById("goalEndDate").value;
    var userId;
    var familyId;


    var urlString = USERS_URL + "add/?name=" + name + "&goalStartDate=" + goalStartDate + "&goalEndDate=" + goalEndDate + "&userId" + userId + "&familyId" + familyId;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}