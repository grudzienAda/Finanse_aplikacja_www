const PAYMENTS_URL = "http://localhost:8080/api/payments/"
const USER_ID = localStorage.getItem('userId');
const FAMILY_ID = localStorage.getItem('familyId');

setTimeout(function () {update_account()}, 5 * 60000);

function update_account() {
	const url = PAYMENTS_URL + "userAccount?userId=" + USER_ID;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.onload = function() {
		document.getElementById("accountBalance").innerHTML = xhr.response;
	}
}

function update_payment_table() {
    const paymentTypeFilter = document.getElementById("paymentTypeFilter").value;
	const startDateFilter = document.getElementById("startDateFilter").value;
	const endDateFilter = document.getElementById("endDateFilter").value;
	const categoryNameFilter = document.getElementById("categoryNameFilter").value;

    const url = USERS_URL + "{familyId}/?familyId=" + FAMILY_ID + "&userId=" + USER_ID + "&paymentType=" + paymentType + "&startDate=" + startDate + "&endDate=" + endDate + "&categoryName=" + categoryName;
	const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
	xhr.responseType = "json";

	xhr.onload = function() {
        var jsondata = xhr.response;
        //get the table headers 
        var col = ["amount", "paymentDate", "categoryName"];
               
        var table = document.getElementById("paymentTable");
        //czyszczenie wierszy pobranej tabelki (oprocz naglowkow):
        var tableHeaderRowCount = 1;
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
 
        //Add the data rows.
        for (var i = 0; i < jsondata.length; i++) {
            tr = table.insertRow(-1);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                var checkdata = jsondata[i][col[j]];
                tabCell.innerHTML = jsondata[i][col[j]];
            }
        }
        var divContainer = document.getElementById("paymentTable");
        divContainer.appendChild(table);
    }
}
function update_payment_table_manual() {//ostatecznie do usuniecia!
	const paymentTypeFilter = document.getElementById("paymentTypeFilter").value;
	const startDateFilter = document.getElementById("startDateFilter").value;
	const endDateFilter = document.getElementById("endDateFilter").value;
	const categoryNameFilter = document.getElementById("categoryNameFilter").value;

    var jsondata = [
		{"paymentId": "1", "amount": "23", "paymentDate": "25.05.2003", "userId": "2", "familyId": "5", "categoryName": "Job"},
        {"paymentId": "1", "amount": "23", "paymentDate": "25.05.2003", "userId": "2", "familyId": "5", "categoryName": "Job"}
	];
    //get the table headers 
    var col = ["amount", "paymentDate", "categoryName"];
               
    var table = document.getElementById("paymentTable");
    //czyszczenie wierszy pobranej tabelki (oprocz naglowkow):
    var tableHeaderRowCount = 1;
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
  
 
    //Add the data rows.
    for (var i = 0; i < jsondata.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            var checkdata = jsondata[i][col[j]];
            tabCell.innerHTML = jsondata[i][col[j]];
        }
    }
    var divContainer = document.getElementById("paymentTable");
    divContainer.innerHTML(table);
}
