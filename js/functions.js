function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandom(allowedValues) {
    const randomIndex = Math.floor(Math.random() * allowedValues.length);
    return allowedValues[randomIndex];
}

function checkCollision(obj1, obj2) {
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

let enemies = []
let intervalId1, intervalId2, intervalId3
const height = 80
const width = 30
// generate the enemies in 1 sec and 1.5sec 
function generateEnemies(){
    intervalId1 = setInterval(() => {
        // all the x coordinates the enemies can spawn in
        const allX = [
            sideBarLeft.width + 20, 
            sideBarLeft.width + 80, 
            sideBarLeft.width + 150, 
            sideBarLeft.width + 215, 
            sideBarLeft.width + 285, 
            sideBarLeft.width + 350
        ]
        const posX = generateRandom(allX)
        // enemy
        const enemy = new Enemy(posX, -height, width, height)
        enemies.push(enemy)
    }, 1000)

    intervalId2 = setInterval(() => {
        const allX = [
            sideBarLeft.width + 20, 
            sideBarLeft.width + 80, 
            sideBarLeft.width + 150, 
            sideBarLeft.width + 215, 
            sideBarLeft.width + 285, 
            sideBarLeft.width + 350
        ]
        const posX = generateRandom(allX)
        // enemy
        const enemy = new Enemy(posX, -height, width, height)
        enemies.push(enemy)
    }, 1500)
}

let coins = []
const coinHeight = 30
const coinWidth = 30
let coinInterval
function generateCoins(){
    coinInterval = setInterval(() => {
        const allX = [
            sideBarLeft.width + 20, 
            sideBarLeft.width + 80, 
            sideBarLeft.width + 150, 
            sideBarLeft.width + 215, 
            sideBarLeft.width + 285, 
            sideBarLeft.width + 350
        ]
        const posX = generateRandom(allX)
        // enemy
        const coin = new Coin(posX, 50, coinWidth, coinHeight)
        coins.push(coin)
    }, 5000)
    // console.log('generating coins');
}