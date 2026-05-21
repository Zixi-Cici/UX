console.log("shopping cart js loaded");
//open and close overlay
const cartOverlay = document.getElementById("cartOverlay")
const closeCartButton = document.getElementById("closeCartButton")
const addButtons = document.querySelectorAll(".add-cart-button") 
const overlayBackground = document.getElementById("overlayBackground")
const cartItemsContainer = document.querySelector(".cart-overlay-container") //找到这个class
const clearAllButton = document.querySelector(".clear-all-button")
const viewCartButton = document.querySelector(".view-cart-button")

let cart = []

addButtons.forEach(function(button){ //把所有按钮一个一个拿出来
    button.addEventListener("click", function(){ //当按钮被点击时执行以下代码
        const productId = button.dataset.id //读取button的id
        cart.push(productId)
        console.log(cart)

        updateCartOverlay() //调用function

        overlayBackground.classList.add("show")
        cartOverlay.classList.add("show") //给每个cartOverlay的class再加上class=“show”（显示overlay）
    })
})

closeCartButton.addEventListener("click", function(){ //退出按钮
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

function updateCartOverlay() {
    localStorage.setItem("cart", JSON.stringify(cart)) //把cart array存进浏览器

    cartItemsContainer.innerHTML = ""

    let total = 0 //用来存商品总价格

    cart.forEach(function(productId){ //遍历每个商品id
        const product = products[productId] //根据key找value
        const priceNumber = Number(product.productPrice.replace("$","")) //找到商品价格，去掉$

        total = total + priceNumber //加入商品价格

        const cartItem = document.createElement("div") //创一个div
        cartItem.classList.add("cart-overlay-item") //加class名字

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
        cartItemsContainer.appendChild(cartItem) //把新的item加入购物车

    })

    document.getElementById("overlayProductSubtotal").textContent = "$" + total.toFixed(2) //保留两位小数，显示到HTML
    document.getElementById("overlayProductTotal").textContent = "$" + total.toFixed(2) + " AUD"
}
