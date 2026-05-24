const savedCart = JSON.parse(localStorage.getItem("cart")) || [] //读取购物车，如果没有就创建空购物车
console.log(savedCart)

const cartPageContainer = document.querySelector(".cart-page-product-container");

let pageTotal = 0

function updateCartPage() {
    cartPageContainer.innerHTML = ""

    savedCart.forEach(function(productId){

        const product = products[productId]

        const PagePriceNumber = Number(product.productPrice.replace("$",""))
        pageTotal = pageTotal + PagePriceNumber

        //create cart product info
        const cartItem = document.createElement("div")
        cartItem.classList.add("cart-page-product-info")

        cartItem.innerHTML = `
            <img src="${product.productImage}" alt="${product.productName}">
            <div class="product-info-text">
                <p class="product-name">${product.productName}</p>
                <p class="product-colour">Colour: Blue</p>
            </div>
            <div class="product-price">
                <p>${product.productPrice}</p>
            </div>
            <div class="product-control">
                <button class="cart-delete-button"><img src="images/icon/delete_button_overlay.png" alt="delete-icon"></button>
                <div class="quantity-control">
                    <button class="quantity-minus"><img src="images/icon/delete_icon.png" alt="delete-icon"></button>
                    <p class="quantity-number">1</p>
                    <button class="quantity-plus"><img src="images/icon/add_icon.png" alt="add-icon"></button>
                </div>
            </div>
        `
        cartPageContainer.appendChild(cartItem)
        
    })

    document.getElementById("PageCartSubtotal").textContent = "$" + pageTotal.toFixed(2)
    document.getElementById("PageCartTotal").textContent = "$" + pageTotal.toFixed(2) + " AUD"
}
updateCartPage()

const checkoutButton = document.querySelector(".check-out-button");

checkoutButton.addEventListener("click", function(){

    localStorage.setItem(

        "cartTotal", pageTotal.toFixed(2)

    )

    window.location.href = "purchase_product.html"

})