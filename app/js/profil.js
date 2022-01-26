function update_profil_info() {
	document.getElementById("userIdProfil").innerHTML = localStorage.getItem('userId');
	document.getElementById("usernameProfil").innerHTML = localStorage.getItem('userMail');
	document.getElementById("mailProfil").innerHTML = localStorage.getItem('username');
}