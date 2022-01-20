USERS_URL = "http://localhost:8080/api/users/"
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

//TODO: poki co nie dziala
async function validate() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	var user = await getUser(email);
	alert(JSON.stringify(user));
	// check password for user



	if (username == "Formget" && password == "123"){
		window.location.href = "mainPage.html"; // Redirecting to other page.
		alert("Logged in successfully"); // bez tej linijki nie dziala, ale komunikat sie nie wyswietla
	}
	else {
		attempt--;// Decrementing by one.
		alert("You have left "+attempt+" attempt.");
		// Disabling fields after 3 attempts.
		if(attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
		}
	}
}
//TODO: poki co nie dziala
async function getUser() {
	var email = document.getElementById("email").value;
	var url = USERS_URL + email;
	//let promise = fetch(url);
	let response = await fetch(url);
	alert("HTTP:" + response.status);
	if (response.ok) { // if HTTP-status is 200-299
		alert("Response OK");
		return await response.json();
	} else {
		alert("HTTP-Error:" + response.status);
	}
	return null;

}

//cancel login
function cancel() {
    window.location.href = "premainPage.html";
}