//menu button
const menuOverlay = document.getElementById("menuOverlay")
const closeMenuButton = document.getElementById("closeButton")
const menuButtons = document.getElementById("menuButton")

menuButtons.addEventListener("click", function(){
    menuOverlay.classList.add("show")
})

closeMenuButton.addEventListener("click", function(){ //close menu button
    menuOverlay.classList.remove("show")
})
