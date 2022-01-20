USERS_URL = "http://localhost:8080/api/payments/"

setTimeout(function () {update_account}, 5 * 60000);
function update_account() {
	const url = USERS_URL + "userAccount?userId=" + USER_ID;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.onload = function() {
		document.getElementById("accountBalance").innerHTML = xhr.response;
	}
}