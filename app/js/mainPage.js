function go_to_main_page() {
    window.location.href = "mainPage.html";
}

function add_payment() {
    document.getElementById("addPaymentModal").style.display = "block";
}
function close_add_payment() {
    document.getElementById("addPaymentModal").style.display = "none";
}

function create_family() {
    document.getElementById("createFamilyModal").style.display = "block";
}
function close_create_family() {
    document.getElementById("createFamilyModal").style.display = "none";
}
function add_user_to_family() {
    document.getElementById("AddUserToFamilyModal").style.display = "block";
}
function close_add_user_to_family() {
    document.getElementById("AddUserToFamilyModal").style.display = "none";
}
function create_goal() {
    document.getElementById("createGoalModal").style.display = "block";
}
function close_create_goal() {
    document.getElementById("createGoalModal").style.display = "none";
}




function logout() {
    var out = confirm("Are you sure?");
    if(out){
        window.location.href = "premainPage.html";
    }
}

//profil
function change_page_profil() {
    window.location.href = "profil.html";
}

//about
function change_page_about() {
    window.location.href = "about.html";
}

