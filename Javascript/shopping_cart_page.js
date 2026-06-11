let savedCart = JSON.parse(localStorage.getItem("cart")) || [] //read shopping cart overlay
//JSON.parse:turn strings into array
//localStorage.getItem:get item from localstorage

console.log(savedCart)

const cartPageContainer = document.querySelector(".cart-page-product-container");

let pageTotal = 0 //total price

function updateCartPage() {
    cartPageContainer.innerHTML = ""

    pageTotal = 0

    savedCart.forEach(function(cartItemData){

        const product = products[cartItemData.id]

        const PagePriceNumber = Number(product.productPrice.replace("$",""))
        pageTotal = pageTotal + PagePriceNumber * cartItemData.quantity

        //create cart product info
        const cartItem = document.createElement("div")
        cartItem.classList.add("cart-page-product-info")

        cartItem.innerHTML = `
            <img src="${product.productImage}" alt="${product.productName}">
            <div class="product-info-text">
                <p class="product-name">${product.productName}</p>
            </div>
            <div class="product-price">
                <p>${product.productPrice}</p>
            </div>
            <div class="product-control">
                <button class="cart-delete-button" data-id="${cartItemData.id}"><img src="images/icon/delete_button_overlay.png" alt="delete-icon"></button>
                <div class="quantity-control">
                    <button class="quantity-minus" data-id="${cartItemData.id}"><img src="images/icon/delete_icon.png" alt="delete-icon"></button>
                    <p class="quantity-number">${cartItemData.quantity}</p>
                    <button class="quantity-plus" data-id="${cartItemData.id}"><img src="images/icon/add_icon.png" alt="add-icon"></button>
                </div>
            </div>
        `
        cartPageContainer.appendChild(cartItem)
        
    })

    document.getElementById("PageCartSubtotal").textContent = "$" + pageTotal.toFixed(2)
    document.getElementById("PageCartTotal").textContent = "$" + pageTotal.toFixed(2) + " AUD"

    localStorage.setItem("cart", JSON.stringify(savedCart))
    localStorage.setItem("cartTotal", pageTotal.toFixed(2))

    const plusButtons = document.querySelectorAll(".quantity-plus")

    plusButtons.forEach(function(button){ //plus button

        button.addEventListener("click", function(){

            const productId = button.dataset.id
            const item = savedCart.find(function(cartItem){
                return cartItem.id === productId
            })

            item.quantity++

            updateCartPage()

        })

    })

    const minusButtons = document.querySelectorAll(".quantity-minus")

    minusButtons.forEach(function(button){ //minus button
        button.addEventListener("click", function(){

            const productId = button.dataset.id
            const item = savedCart.find(function(cartItem){
                return cartItem.id === productId
            })

            if(item.quantity > 1){
                item.quantity--
            } else {
                savedCart = savedCart.filter(function(cartItem){
                    return cartItem.id !== productId
                })
            }

            updateCartPage()

        })

    })

    const deleteButtons = document.querySelectorAll(".cart-delete-button")

    deleteButtons.forEach(function(button){ //delete button
        button.addEventListener("click", function(){
            const productId = button.dataset.id
            savedCart = savedCart.filter(function(cartItem){
                return cartItem.id !== productId
            })
            updateCartPage()
        })
    })
}

updateCartPage()

const checkoutButton = document.querySelector(".check-out-button");

checkoutButton.addEventListener("click", function(){ //checkout button

    if(savedCart.length === 0){
        alert("Your cart is empty. Please add a product before checkout.")
        return
    }

    localStorage.setItem(

        "cartTotal", pageTotal.toFixed(2) 
        //save total price to local, so that purchase product page can use

    )

    window.location.href = "purchase_product.html"

})