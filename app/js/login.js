USERS_URL = "http://localhost:8080/api/users/"
var attempt = 3; // Variable to count number of attempts.

function validate() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var url = USERS_URL + "login?mail=" + email + "&password=" + password;
	const xhr = new XMLHttpRequest();

	xhr.open('GET', url);
	xhr.responseType = "json";
	xhr.onload = () => {
		const data = xhr.response;
		if(data === -1) {
			alert("Incorrect password");
			attempt--;
			alert("You have left "+attempt+" attempt.");
			if(attempt === 0){
				//TODO: pozwala się logować
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
			}
		} else if (data === 0) {
			alert("No such user is registered");
		}
		else {
			window.location.href = "mainPage.html";
		}
	};
	xhr.send();
}

//cancel login
function cancel() {
    window.location.href = "premainPage.html";
}