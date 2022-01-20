var modal = document.getElementById("myModal");
var addPayment = document.getElementById("addPayment");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
addPayment.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 





function add_payment() {
    document.getElementById("myModal").style.display = "block";
}
function close_add_payment() {
    document.getElementById("myModal").style.display = "none";
}


// Register/Log in
var login = document.getElementById("login");
var register = document.getElementById("register");
login.onclick = function() {
    window.location.href = "loginForm.html";
}
register.onclick = function() {
    window.location.href = "loginForm.html";
}
function change_page_register(){
    window.location.href = "registerForm.html";
} 
function change_page_login(){
    window.location.href = "loginForm.html";
} 