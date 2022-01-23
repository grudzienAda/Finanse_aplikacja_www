const PAYMENTS_URL = "http://localhost:8080/api/payments/";
const USERS_URL = "http://localhost:8080/api/users/";
const USER_ID = localStorage.getItem('userId');
const FAMILY_ID = localStorage.getItem('familyId');

function addPayment() {
    const amount = document.getElementById("amount").value;
    let paymentDate = document.getElementById("paymentDate").value;
    const categoryName = document.getElementById("categoryName").value;

    paymentDate = new Date(paymentDate);
    const urlString = PAYMENTS_URL + "add?amount=" + amount + "&paymentDate=" + paymentDate.toISOString() + "&idUser=" + USER_ID
        + "&idFamily=" + FAMILY_ID + "&categoryName=" + categoryName;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", urlString, true);
    xhr.send();
    update_account2();

}

function update_account2() {
    const url = PAYMENTS_URL + "userAccount?userId=" + USER_ID;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function() {
        document.getElementById("accountBalance").innerHTML = xhr.response;
    }
}

function getPayments() {

}