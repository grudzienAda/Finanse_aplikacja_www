// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myModal").style.display = "none";
  }
} 

function add_payment() {
    document.getElementById("myModal").style.display = "block";
}
function close_add_payment() {
    document.getElementById("myModal").style.display = "none";
}

// Register/Log in
function change_page_register(){
    window.location.href = "registerForm.html";
} 
function change_page_login(){
    window.location.href = "loginForm.html";
} 