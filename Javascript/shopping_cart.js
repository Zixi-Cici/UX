console.log("shopping cart js loaded");
//open and close overlay
const cartOverlay = document.getElementById("cartOverlay")
const closeCartButton = document.getElementById("closeCartButton")
const addButtons = document.querySelectorAll(".add-cart-button") 
const overlayBackground = document.getElementById("overlayBackground")//会把所有button放进NodeList

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

const cartItemsContainer = document.querySelector(".cart-overlay-container") //找到这个class

function updateCartOverlay() {
    cartItemsContainer.innerHTML = ""

    cart.forEach(function(productId){
        const product = products[productId] //根据key找value
        const cartItem = document.createElement("div") //创一个div
        cartItem.classList.add("cart-overlay-item") //加class名字

        cartItem.innerHTML = `
        <img class="overlay-product-image" src="${product.productImage}" alt="${product.productName}">
                <div class="cart-overlay-info">
                    <p class="overlay-product-name">${product.productName}</p>
                    <p class="overlay-product-colour">Colour: Blue</p>
                    <p class="overlay-product-price">${product.productPrice} AUD</p>
                </div>
        `
        cartItemsContainer.appendChild(cartItem) //把新的item加入购物车

    })
}
