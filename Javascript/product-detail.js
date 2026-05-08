const products = {
    giggleThrowBall: { //dog toys row 1
        productName: "TPR Giggle Throw Ball",
        productPrice: "$9.95",
        productImage: "images/image/giggle_ball_blue_big.png",
        infoTitle1: "Description",
        infoContent1: `Satisfy the toughest chewers around with our 
                            Paws & Claws TPR Giggle Throw Ball! Made with highly durable TPR, 
                            this toy has a built-in giggle noise that activates when you shake it. 
                            Our design is non-toxic, and has an ergonomic handle moulded into the 
                            toy for easy pick up and throwing. The perfect toy to play fetch with 
                            your pet!`,
        infoTitle2: "Material",
        infoContent2: "Tough TPR Rubber Material",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for midium/large size dogs"
    },

    invincibleSnakeSqueakers: {
        productName: "Invincible Snake 6 Squeakers",
        productPrice: "$39.95",
        productImage: "images/image/big_invincibles_snake.png",
        infoTitle1: "Description",
        infoContent1: `Invincibles Tough Seamz are designed to play as hard as 
        your dog does! Designed with double layered and double stitched seams, 
        Tough Seamz are built to last twice as long as regular Outward Hound 
        Invincibles plush toys. Plus, tough Seamz contain our bestselling 
        Invincibles squeakers that keep squeaking if punctured! Invincibles 
        Tough Seamz are guaranteed to keep your pup playing longer!`,
        infoTitle2: "Material",
        infoContent2: "double layered and double stitched seams",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for all size dogs"
    },

    rubberChewyChomperDragon: {
        productName: "Rubber Chewy Chomper Dragon",
        productPrice: "$29.95",
        productImage: "images/image/big_rubber_chewy_dragon.png",
        infoTitle1: "Description",
        infoContent1: `Bring a touch of mythical magic to your dog's 
        playtime with the Waggly Rubber ChewyChomper Dragon Squeaker Dog Toy. 
        This unique toy features the head of a dragon, crafted to deliver both 
        durability and excitement.The toy also features a built-in squeaker that 
        adds an extra layer of fun. The enticing sound keeps your dog motivated 
        and entertained, whether they're playing fetch, tugging, or chewing.`,
        infoTitle2: "Material",
        infoContent2: "Made from tough, non-toxic rubber to withstand vigorous chewing.",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for all size dogs"
    },

    chunckitAmphibiousBall: {
        productName: "Chuckit Amphibious Ball",
        productPrice: "$19.95",
        productImage: "images/image/big_chuckit_ball.png",
        infoTitle1: "Description",
        infoContent1: `Make Fetch Happen on land and in water with the Chuckit! 
        Amphibious Mega Ball! Featuring a lightweight, foam core, this ball floats 
        high on the water and is unsinkable! Ideal for medium to large water-loving 
        canines, the Amphibious Mega Ball is made from durable lightweight materials 
        and is gentle on your dog's mouth as they fetch the ball.`,
        infoTitle2: "Material",
        infoContent2: "Lightweight, foam core",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for midium/large size dogs"
    },

    nylonSkullDogToy: { //dog toys row 2
        productName: "Nylon Skull Dog Toy",
        productPrice: "$29.95",
        productImage: "images/image/big_nylon_skull_dog_toy.png",
        infoTitle1: "Description",
        infoContent1: `Get spooky with the Waggly Bone-Biter Nylon Skull Dog Toy! 
        Make playtime a fang-tastic adventure with this unique bone-shaped toy featuring 
        double skulls. Specifically designed for tough chewers, this durable toy is perfect 
        for Halloween fun and beyond.`,
        infoTitle2: "Material",
        infoContent2: "Durable nylon construction",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for large size dogs"
    },

    footballWithSqueaker: {
        productName: "Ultra Play TPR Football with Squeaker",
        productPrice: "$29.95",
        productImage: "images/image/big_ultra_football.png",
        infoTitle1: "Description",
        infoContent1: `Playtime is about to get even more fun with our Paws & 
        Claws Ultra Play Football Pet Toy! This sleek design is made from TPR foam 
        which is both durable and lightweight. Also featuring bright colours for high 
        visibility as well as a built in squeaker for extra excitement.`,
        infoTitle2: "Material",
        infoContent2: "TPR Foam Rubber",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for all size dogs"
    },

    screamXtremeRopeMan: {
        productName: "Scream Xtreme Rope Man",
        productPrice: "$14.95",
        productImage: "images/image/big_scream_rope_man.png",
        infoTitle1: "Description",
        infoContent1: `A rope man designed for the active chewer. 
        This toy is tough and durable and perfect for interactive games 
        of tug. 30cm.`,
        infoTitle2: "Material",
        infoContent2: "Rope",
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for all size dogs"
    },

    chunckitKickOff: {
        productName: "Chuckit Kick Off",
        productPrice: "$44.95",
        productImage: "images/image/big_chuckit_kick_off.png",
        infoTitle1: "Description",
        infoContent1: `Make Fetch Happen with the Chuckit! 
        Kickoff Dog Toy! The first football designed for fetch, 
        this dog toy features a built-in tee that makes the ball 
        stand upright for the perfect kick-off. When dogs fetch, the 
        patented bite zones make it easy for dogs to pick up and bring back to you. `,
        infoTitle2: "Material",
        infoContent2: `Designed with a lightweight yet durable design, the 
        innovative foam core, and outer rubber shell makes this fetch toy soft 
        on your dog's mouth and won't ever pop when your dog chomps down`,
        infoTitle3: "Suitable Dog",
        infoContent3: "Suitable for all size dogs"
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

    document.getElementById("infoTitle1").textContent = product.infoTitle1;
    document.getElementById("infoTitle2").textContent = product.infoTitle2;
    document.getElementById("infoTitle3").textContent = product.infoTitle3;

    document.getElementById("infoContent1").textContent = product.infoContent1;
    document.getElementById("infoContent2").textContent = product.infoContent2;
    document.getElementById("infoContent3").textContent = product.infoContent3;
}
