USERS_URL = "http://localhost:8080/api/users/"

//obecny stan konta
setTimeout(function () {
	var url = USERS_URL + "userAccount?userId=" + USER_ID;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.send();

	xhr.onload = function() {
		let accountBalance = xhr.response;
		document.getElementById("accountBalance").innerHTML = accountBalance;
	}
}, 5 * 60000); //updating every 5 minutes