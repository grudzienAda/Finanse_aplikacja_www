//cancel login
function goToPremainPage() {
    window.location.href = "premainPage.html";
}

function validate() {
    var username = document.getElementById("username").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;

    if(password1!=password2) {
        alert("Repeated password is different!");
    }
    else {
        window.location.href = "premainPage.html";
        alert("Succesfully registered!"); //nie wyswietla sie:(
    }
}