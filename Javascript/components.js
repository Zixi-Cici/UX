//menu button
const menuOverlay = document.getElementById("menuOverlay")
const closeMenuButton = document.getElementById("closeButton")
const menuButtons = document.getElementById("menuButton")

if (menuButtons && menuOverlay) {
    menuButtons.addEventListener("click", function(){
        menuOverlay.classList.add("show")
    })
}

if (closeMenuButton && menuOverlay){
    closeMenuButton.addEventListener("click", function(){ //close menu button
        menuOverlay.classList.remove("show")
    })
}

//home - promotion card button
const shopTreatsButton = document.getElementById("treatsButton")

if (shopTreatsButton){
    shopTreatsButton.addEventListener("click", function(){
        window.location.href = "product_list_treats.html"
    })
}

//home - view toys button
const viewToysButton = document.getElementById("viewToysButton")

if (viewToysButton){
    viewToysButton.addEventListener("click", function(){
        window.location.href = "product_list_toy.html"
    })
}

//home - view treats button
const viewTreatsButton = document.getElementById("viewTreatsButton")

if (viewTreatsButton) {
    viewTreatsButton.addEventListener("click", function(){
        window.location.href = "product_list_treats.html"
    })
}

//nav - shopping cart icon
const navCartIcon = document.querySelector(".shopping-cart-icon")

if(navCartIcon){
    navCartIcon.addEventListener("click", function(){
        window.location.href = "shopping_cart.html"
    })

}
