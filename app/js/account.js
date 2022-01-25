// const PAYMENTS_URL = "http://localhost:8080/api/payments/"
// const USER_ID = localStorage.getItem('userId');
// const FAMILY_ID = localStorage.getItem('familyId');

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


