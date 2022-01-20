PAYMENTS_URL = "http://localhost:8080/api/payments/"
USER_ID = localStorage.getItem('userId');
FAMILY_ID = localStorage.getItem('familyId');

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
}

function getPayments() {

}