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

}

function update_account2() {
    const url = PAYMENTS_URL + "userAccount?userId=" + USER_ID;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("accountBalance").innerHTML = xhr.response;
    }
}

function getAndCreatePaymentTable(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    alert('thrill');
    xhr.onload = function() {
        const jsondata = xhr.response;
        alert(jsondata);
        const col = ["amount", "paymentDate", "categoryName"];
        const table = document.getElementById("paymentTable");
        //czyszczenie wierszy pobranej tabelki (oprocz naglowkow):
        const tableHeaderRowCount = 1;
        const rowCount = table.rows.length;
        for (let i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }

        //Add the data rows.
        for (let i = 0; i < jsondata.length; i++) {
            tr = table.insertRow(-1);
            for (let j = 0; j < col.length; j++) {
                const tabCell = tr.insertCell(-1);
                const checkdata = jsondata[i][col[j]];
                tabCell.innerHTML = jsondata[i][col[j]];
            }
        }
        const divContainer = document.getElementById("paymentTable");
        divContainer.appendChild(table);
    }
    xhr.send()
}

function load_payment_table() {
    const url = PAYMENTS_URL + localStorage.getItem("familyId");
    alert(url);
    getAndCreatePaymentTable(url);
}