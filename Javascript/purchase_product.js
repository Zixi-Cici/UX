//read total price
const total = localStorage.getItem("cartTotal") //get total price

document.querySelector(".order-total-price").textContent = "$" + total + " AUD"

//make continue button clickable, save data from users
const continueButton = document.querySelector(".continue-button")

continueButton.addEventListener("click", function(){

    const shippingInfo = {

        email: document.getElementById("email").value, //.value: content of user input

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        address: document.getElementById("address").value,

        country: document.getElementById("country").value,

        state: document.getElementById("state").value,

        postcode: document.getElementById("postcode").value,

        phoneNumber: document.getElementById("phoneNumber").value

    }

    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo))
    //save user input, and make object into strings

    window.location.href = "final_payment.html"

})