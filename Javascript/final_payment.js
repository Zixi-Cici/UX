//read user's data
const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"))

document.getElementById("confirmContact").textContent = shippingInfo.email + " / " + shippingInfo.phoneNumber

document.getElementById("confirmName").textContent = shippingInfo.firstName + " " + shippingInfo.lastName

document.getElementById("confirmAddress").textContent = shippingInfo.address + ", " + shippingInfo.state + " " + shippingInfo.postcode + ", " + shippingInfo.country

//pay now button
const payButton = document.querySelector(".pay-button")

payButton.addEventListener("click", function(){

    const inputs = document.querySelectorAll(".payment-method-input input")
    let allFilled = true

    inputs.forEach(function(input){
        if(input.value.trim() === ""){
            allFilled = false
        }
    })

    if(!allFilled){
        alert("Please complete all payment information before continuing.")
        return
    }

    window.location.href = "payment_success.html"

});