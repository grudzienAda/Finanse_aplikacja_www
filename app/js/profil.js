USER_ID = localStorage.getItem('userId');
USER_MAIL = localStorage.getItem('userMail');
USER_NAME = localStorage.getItem('username');


function update_profil_info() {
	document.getElementById("userIdProfil").innerHTML = USER_ID;
	document.getElementById("usernameProfil").innerHTML = USER_NAME;
	document.getElementById("mailProfil").innerHTML = USER_MAIL;
}