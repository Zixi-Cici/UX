const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"))

document.getElementById("confirmContact").textContent = shippingInfo.email + " / " + shippingInfo.phoneNumber

document.getElementById("confirmName").textContent = shippingInfo.firstName + " " + shippingInfo.lastName

document.getElementById("confirmAddress").textContent = shippingInfo.address + ", " + shippingInfo.state + " " + shippingInfo.postcode + ", " + shippingInfo.country


const payButton = document.querySelector(".pay-button")

payButton.addEventListener("click", function(){

    window.location.href = "payment_success.html"

});