const total = localStorage.getItem("cartTotal")

document.querySelector(".order-total-price").textContent = "$" + total + " AUD"

const continueButton = document.querySelector(".continue-button")

continueButton.addEventListener("click", function(){

    const shippingInfo = {

        email: document.getElementById("email").value,

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        address: document.getElementById("address").value,

        country: document.getElementById("country").value,

        state: document.getElementById("state").value,

        postcode: document.getElementById("postcode").value,

        phoneNumber: document.getElementById("phoneNumber").value

    }

    localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo))

    window.location.href = "final_payment.html"

})