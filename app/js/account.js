USERS_URL = "http://localhost:8080/api/payments/"
USER_ID = localStorage.getItem('userId');
FAMILY_ID = localStorage.getItem('familyId');

setTimeout(function () {update_account()}, 5 * 60000);

function update_account() {
	const url = USERS_URL + "userAccount?userId=" + USER_ID;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.onload = function() {
		//document.getElementById("accountBalance").innerHTML = xhr.response + " pln";
		document.getElementById("accountBalance").innerHTML = "123" + " pln";
	}
}

function update_payment_table() {
	const paymentTypeFilter = document.getElementById("paymentTypeFilter").value;
	const startDateFilter = document.getElementById("startDateFilter").value;
	const endDateFilter = document.getElementById("endDateFilter").value;
	const categoryNameFilter = document.getElementById("categoryNameFilter").value;

	const url = USERS_URL + "{familyId}?familyId=" + FAMILY_ID + "&userId=" + USER_ID + "&paymentType=" + paymentType + "&startDate=" + startDate + "&endDate=" + endDate + "&categoryName=" + categoryName;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.responseType = "json";
	xhr.send();

	xhr.onload = function() {
		newTable = xhr.response;
		newTable = [
			{"Amount": "23", "Date": "25.05.2003", "Category": "Job", "Type": "out"}
		];
		// EXTRACT VALUE FOR HTML HEADER. 
        var col = [];
        for (var i = 0; i < newTable.length; i++) {
            for (var key in newTable[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
		// CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
		// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
		// ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < newTable.length; i++) {
			alert(i);
            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = newTable[i][col[j]];
            }
        }
		// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        document.getElementById("paymentTableDiv").appendChild(table);
	}