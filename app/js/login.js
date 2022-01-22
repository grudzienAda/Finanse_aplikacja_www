
USERS_URL = "http://localhost:8080/api/users/"
FAMILIES_URL = "http://localhost:8080/api/families/"
let attempt = 3;

function validate() {
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const url = USERS_URL + "login/?mail=" + email + "&password=" + password;
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
				//TODO: pozwala się logować -> chyba dziala?
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				alert("Try in 0.5 min.");
				setTimeout(function () {make_visible()}, 0.5 * 60000);

			}
		} else if (data === 0) {
			alert("No such user is registered");
		}
		else {
			//https://javascript.info/xmlhttprequest
			saveUserIdAndMail();
			saveUserFamilyId();
			alert(localStorage.getItem("familyId"));
			window.location.href = "mainPage.html";

		}
	};
	xhr.send();
}

function make_visible() {
	document.getElementById("username").disabled = false;
	document.getElementById("password").disabled = false;
	document.getElementById("submit").disabled = false;
	attempt = 3;
}

function saveUserIdAndMail() {//and save username
	const email = document.getElementById("email").value;
	const xhr2 = new XMLHttpRequest();
	xhr2.open('GET', USERS_URL + email);
	xhr2.responseType = "json";

	xhr2.onload = function() {
		let userJson = xhr2.response;
		localStorage.setItem('userId', userJson.userId);
		localStorage.setItem('userMail', userJson.mail);
		localStorage.setItem('username', userJson.name);
	}
	xhr2.send();

}

function saveUserFamilyId() {
	const xhr2 = new XMLHttpRequest();
	xhr2.open('GET', FAMILIES_URL + localStorage.getItem('userId'));

	xhr2.onload = function() {
		localStorage.setItem('familyId', xhr2.response);
	}
	xhr2.send();
}

function cancel() {
    window.location.href = "premainPage.html";
}

