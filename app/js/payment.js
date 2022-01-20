USERS_URL = "http://localhost:8080/api/payments/"
USER_ID = localStorage.getItem('userId');
FAMILY_ID = localStorage.getItem('familyId');

function addPayment() {
    const amount = document.getElementById("amount").value;
    const paymentDate = document.getElementById("paymentDate").value;
    const categoryName = document.getElementById("categoryName").value;

    const urlString = USERS_URL + "add/?amount=" + amount + "&paymentDate=" + paymentDate.toISOString() + "&idUser=" + USER_ID
        + "&idFamily=" + FAMILY_ID + "&categoryName=" + categoryName;
    const xhr = new XMLHttpRequest();

    xhr.open("POST", urlString, true);
    xhr.send();
}