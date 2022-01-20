USERS_URL = "http://localhost:8080/api/users/"

//obecny stan konta
function update_account() {
	var url = USERS_URL + "userAccount?userId=" + USER_ID;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.onload = function() {
		let accountBalance = xhr.response;
		document.getElementById("accountBalance").innerHTML = accountBalance;
	}
}