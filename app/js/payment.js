USERS_URL = "http://localhost:8080/api/payments/"

function addPayment() {
    var amount = document.getElementById("amount").value;
    var paymentDate = document.getElementById("paymentDate").value;
    var categoryName = document.getElementById("categoryName").value;
    var idUser;


    var urlString = USERS_URL + "add/?amount=" + amount + "&paymentDate=" + paymentDate + "&idUser" + idUser + "&idFamily" + idFamily + "&categoryName=" + categoryName;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", urlString, true);
    xhr.send();
}