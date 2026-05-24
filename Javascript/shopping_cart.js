console.log("shopping cart js loaded");
//open and close overlay
const cartOverlay = document.getElementById("cartOverlay")
const closeCartButton = document.getElementById("closeCartButton")
const addButtons = document.querySelectorAll(".add-cart-button") 
const overlayBackground = document.getElementById("overlayBackground")
const cartItemsContainer = document.querySelector(".cart-overlay-container")
const clearAllButton = document.querySelector(".clear-all-button")
const viewCartButton = document.querySelector(".view-cart-button")

let cart = []

//add to cart button
addButtons.forEach(function(button){
    button.addEventListener("click", function(){ 
        let productId = button.dataset.id

        //if it is the big button in detail page, no data-id
        if (!productId) {

            const searchText = window.location.search

            const splitText = searchText.split("=")

            productId = splitText[1]

        }

        cart.push(productId)

        updateCartOverlay()

        overlayBackground.classList.add("show")
        cartOverlay.classList.add("show")
    })
})

closeCartButton.addEventListener("click", function(){ //close cart button
    overlayBackground.classList.remove("show")
    cartOverlay.classList.remove("show")
})

clearAllButton.addEventListener("click", function(){ //clear all button
    cart = []
    updateCartOverlay()
})

viewCartButton.addEventListener("click", function(){
    window.location.href = "shopping_cart.html"
})

function updateCartOverlay() {  //update add to cart overlay
    localStorage.setItem("cart", JSON.stringify(cart))

    cartItemsContainer.innerHTML = ""

    let total = 0 //total price

    cart.forEach(function(productId){ 
        const product = products[productId] 
        const priceNumber = Number(product.productPrice.replace("$",""))

        total = total + priceNumber 

        const cartItem = document.createElement("div") 
        cartItem.classList.add("cart-overlay-item") 

        //update content
        cartItem.innerHTML = `  
        <img class="overlay-product-image" src="${product.productImage}" alt="${product.productName}">
                <div class="cart-overlay-info">
                    <p class="overlay-product-name">${product.productName}</p>
                    <p class="overlay-product-colour">Colour: Blue</p>
                    <p class="overlay-product-price">${product.productPrice} AUD</p>
                </div>

                <div class="cart-overlay-action">
                    <button class="cart-overlay-delete-button">
                        <img src="images/icon/delete_button_overlay.png" alt="delete-button-overlay">
                    </button>
                    <div class="quantity-control">
                        <button class="quantity-minus"><img src="images/icon/delete_icon.png" alt="delete-icon"></button>
                        <p class="quantity-number">1</p>
                        <button class="quantity-plus"><img src="images/icon/add_icon.png" alt="add-icon"></button>
                    </div>
                </div>
        `
        cartItemsContainer.appendChild(cartItem) //add new products to shopping cart

    })

    document.getElementById("overlayProductSubtotal").textContent = "$" + total.toFixed(2) 
    document.getElementById("overlayProductTotal").textContent = "$" + total.toFixed(2) + " AUD"
}
