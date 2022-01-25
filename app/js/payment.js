const PAYMENTS_URL = "http://localhost:8080/api/payments/";
const USERS_URL = "http://localhost:8080/api/users/";
const USER_ID = localStorage.getItem('userId');
const FAMILY_ID = localStorage.getItem('familyId');

function addPayment() {
    const amount = document.getElementById("amount").value;
    let paymentDate = document.getElementById("paymentDate").value;
    const categoryName = document.getElementById("categoryName").value;

    paymentDate = new Date(paymentDate);
    const urlString = PAYMENTS_URL + "add?amount=" + amount + "&paymentDate=" + paymentDate.toISOString() + "&idUser=" + USER_ID
        + "&idFamily=" + FAMILY_ID + "&categoryName=" + categoryName;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", urlString, true);
    xhr.send();
    update_account2();
    update_payment_table();
    window.location.reload(true);

}

function update_account2() {
    const url = PAYMENTS_URL + "userAccount?userId=" + USER_ID;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        document.getElementById("accountBalance").innerHTML = xhr.response;
    }
    xhr.send();
}

function getAndCreatePaymentTable(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
            const jsonData = xhr.response;
            const col = ["amount", "paymentDate", "categoryName"];
            const table = document.getElementById("paymentTable");
            //czyszczenie wierszy pobranej tabelki (oprocz naglowkow):
            const tableHeaderRowCount = 1;
            const rowCount = table.rows.length;
            for (let i = tableHeaderRowCount; i < rowCount; i++) {
                table.deleteRow(tableHeaderRowCount);
            }

            //Add the data rows.
            for (let i = 0; i < jsonData.length; i++) {
                tr = table.insertRow(-1);
                for (let j = 0; j < col.length; j++) {
                    const tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jsonData[i][col[j]];
                }
            }
            const divContainer = document.getElementById("paymentTable");
            divContainer.appendChild(table);
        }

    xhr.send();
}

function update_payment_table() {
    const paymentType = document.getElementById("paymentTypeFilter").value;
    const startDate = document.getElementById("startDateFilter").value;
    const endDate = document.getElementById("endDateFilter").value;
    const categoryName = document.getElementById("categoryNameFilter").value;

    let url = PAYMENTS_URL + localStorage.getItem("familyId") + "?userId=" + USER_ID + "&paymentType=" + paymentType;
    console.log(url);
    if (startDate !== null) {
        const sDate = new Date(startDate);
        url = url + "&startDate=" + sDate.toISOString();
    }
    if (endDate !== null) {
        const eDate = new Date(endDate);
        url = url + "&endDate=" + eDate.toISOString();
    }
    if (categoryName !== "All") {
        url += "&categoryName=" + categoryName;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
        const jsonData = xhr.response;
        const col = ["amount", "paymentDate", "categoryName"];

        const table = document.getElementById("paymentTable");
        const tableHeaderRowCount = 1;
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        //Add the data rows.
        for (var i = 0; i < jsonData.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = jsonData[i][col[j]];
            }
        }
        const divContainer = document.getElementById("paymentTable");
        divContainer.appendChild(table);
    }
    xhr.send();
}



function load_payment_table() {
    const url = PAYMENTS_URL + localStorage.getItem("familyId");
    getAndCreatePaymentTable(url);
}