GOALS_URL = "http://localhost:8080/api/goals/"

function addGoal() {
    const name = document.getElementById("goalName").value;
    const goalStartDate = document.getElementById("goalStartDate").value;
    const goalEndDate = document.getElementById("goalEndDate").value;
    const sDate = new Date(goalStartDate);
    const eDate = new Date(goalEndDate);
    const urlString = GOALS_URL + "add/?name=" + name + "&goalStartDate=" + sDate.toISOString() + "&goalEndDate=" + eDate.toISOString()
        + "&userId=" + localStorage.getItem("userId") + "&familyId=" + localStorage.getItem("familyId");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();

    window.location.reload(true);
}

function addPaymentToGoal() {
    const amount = document.getElementById("donation").value;
    const goalsList = document.getElementById("goals-dropdown");
    const donationDate = document.getElementById("donationDate").value;
    
    let urlString = GOALS_URL + "donate/?goalId=" + goalsList.value + "&amount=" + amount + "&userId=" + localStorage.getItem("userId");

    if (donationDate !== null) {
        const dDate = new Date(donationDate);
        urlString = urlString + "&goalPaymentDate=" + dDate.toISOString();
    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
    window.location.reload(true);
}

function createGoalsList() {
    const table = document.getElementById("goalsTable");
    const urlString = GOALS_URL + "user?userId=" + localStorage.getItem("userId");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlString, true);
    xhr.responseType = "json";

    xhr.onload = function() {
        const goals = xhr.response;
        const cols = ["goalName", "amount", "goalEndDate"];
        const tableHeaderRowCount = 1;
        const rowCount = table.rows.length;

        for (let i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }

        let tr;
        for (let i = 0; i < goals.length; i++) {
            tr = table.insertRow(-1);
            for (let j = 0; j < cols.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = goals[i][cols[j]];
            }
        }
        const divContainer = document.getElementById("goalsTable");
        divContainer.appendChild(table);
    }
    xhr.send();
}

function createGoalsDropdown(elementId) {
    const selectList = document.getElementById(elementId);
    const urlString = GOALS_URL + "user?userId=" + localStorage.getItem("userId");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", urlString, true);
    xhr.responseType = "json";

    xhr.onload = function() {
        const goals = xhr.response;
        for(let i = 0; i < goals.length; i++) {
            const item = goals[i];
            const option = document.createElement("option");
            option.text = item.goalName;
            option.value = item.goalId;
            selectList.add(option);
        }
    }
    xhr.send();
}

