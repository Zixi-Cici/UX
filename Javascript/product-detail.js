const products = {
    giggleThrowBall: {
        productName: "TPR Giggle Throw Ball",
        productPrice: "$9.95",
        productImage: "images/image/giggle_ball_blue_big.png",
        productDescription: `Satisfy the toughest chewers around with our 
                            Paws & Claws TPR Giggle Throw Ball! Made with highly durable TPR, 
                            this toy has a built-in giggle noise that activates when you shake it. 
                            Our design is non-toxic, and has an ergonomic handle moulded into the 
                            toy for easy pick up and throwing. The perfect toy to play fetch with 
                            your pet!`,
        productMaterial: "Tough TPR Rubber Material",
        productSuitableDog: "Suitable for midium/large size dogs"

    },

    invincibleSnakeSqueakers: {
        productName: "Invincible Snake 6 Squeakers",
        productPrice: "$39.95",
        productImage: "images/image/big_invincibles_snake.png",
        productDescription: `Invincibles Tough Seamz are designed to play as hard as 
        your dog does! Designed with double layered and double stitched seams, 
        Tough Seamz are built to last twice as long as regular Outward Hound 
        Invincibles plush toys. Plus, tough Seamz contain our bestselling 
        Invincibles squeakers that keep squeaking if punctured! Invincibles 
        Tough Seamz are guaranteed to keep your pup playing longer!`,
        productMaterial: "double layered and double stitched seams",
        productSuitableDog: "Suitable for all size dogs"
    },
}

const searchText = window.location.search
const splitText = searchText.split("=")
const productId = splitText[1]
const product = products[productId]

if (product) {
    document.getElementById("productName").textContent = product.productName;
    document.getElementById("productPrice").textContent = product.productPrice;
    document.getElementById("productImage").src = product.productImage;
    document.getElementById("productDescription").textContent = product.productDescription;
    document.getElementById("productMaterial").textContent = product.productMaterial;
    document.getElementById("productSuitableDog").textContent = product.productSuitableDog;
}
