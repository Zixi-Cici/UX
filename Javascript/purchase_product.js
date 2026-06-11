//read total price
const total = localStorage.getItem("cartTotal") //get total price

document.querySelector(".order-total-price").textContent = "$" + total + " AUD"

//make continue button clickable, save data from users
const continueButton = document.querySelector(".continue-button")

continueButton.addEventListener("click", function(){

    const shippingInfo = {

        email: document.getElementById("email").value.trim(), //.value: content of user input

        firstName: document.getElementById("firstName").value.trim(),

        lastName: document.getElementById("lastName").value.trim(),

        address: document.getElementById("address").value.trim(),

        country: document.getElementById("country").value.trim(),

        state: document.getElementById("state").value.trim(),

        postcode: document.getElementById("postcode").value.trim(),

        phoneNumber: document.getElementById("phoneNumber").value.trim()

    }

    if (
        shippingInfo.email === "" ||
        shippingInfo.firstName === "" ||
        shippingInfo.lastName === "" ||
        shippingInfo.address === "" ||
        shippingInfo.country === "" ||
        shippingInfo.state === "" ||
        shippingInfo.postcode === "" ||
        shippingInfo.phoneNumber === ""
    ) {
        alert("Please fill in all required information before continuing.")
        return
    }

    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo))
    //save user input, and make object into strings

    window.location.href = "final_payment.html"

})