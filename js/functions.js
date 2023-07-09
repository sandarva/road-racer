// This function generates numbers in a certain range
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// This function picks random anything from an array
function generateRandom(allowedValues) {
    const randomIndex = Math.floor(Math.random() * allowedValues.length);
    return allowedValues[randomIndex];
}

// This function checks for collision between two objects and returns boolean
function checkCollision(obj1, obj2) {
    return (
        obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y
    );
}

// This function removes the obejcts from the array
function removeObject(objectIndex, objectArr){
    setTimeout(() => {
        objectArr.splice(objectIndex, 1)
    }, 0)
}

/**
 * GLOBAL X POSITION FOR ENEMIES AND COINS
 */
const allX = [
    sideBarLeft.width + 20, 
    sideBarLeft.width + 80, 
    sideBarLeft.width + 150, 
    sideBarLeft.width + 215, 
    sideBarLeft.width + 285, 
    sideBarLeft.width + 350
]

// This function generates the enemy and push into enemies array
function generateEnemies(){
    enemyIntervalId1 = setInterval(() => {
        const posX = generateRandom(allX)
        // enemy
        const enemy = new Enemy(posX, -ENEMY_HEIGHT, ENEMY_WIDTH, ENEMY_HEIGHT)
        ENEMIES.push(enemy)
    }, 1000)

    enemyIntervalId2 = setInterval(() => {
        const posX = generateRandom(allX)
        // enemy
        const enemy = new Enemy(posX, -ENEMY_HEIGHT, ENEMY_WIDTH, ENEMY_HEIGHT)
        ENEMIES.push(enemy)
    }, 1500)
}

/**
 * This function generates coin and push into the coins array
 */
function generateCoins(){
    coinIntervalId = setInterval(() => {
        const posX = generateRandom(allX)
        // coin
        const coin = new Coin(posX, 50, COIN_WIDTH, COIN_HEIGHT)
        COINS.push(coin)
    }, 5000)
}