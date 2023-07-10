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
function checkCollision(object1, object2) {
    return (
        object1.x < object2.x + object2.width &&
        object1.x + object1.width > object2.x &&
        object1.y < object2.y + object2.height &&
        object1.y + object1.height > object2.y
    );
}

// This function removes the obejcts from the array
function removeObject(objectIndex, objectArr){
    objectArr.splice(objectIndex, 1)
}

const totalRoadWidth = (canvas.width - (sideBarLeft.width + sideBarRight.width))
const singleRoadWidth = totalRoadWidth / 3
/**
 * GLOBAL X POSITION FOR ENEMIES AND COINS
 */
const firstLane = 30
const secondLane = 140
const allX = [
    road.x + firstLane, 
    road.x + secondLane, 
    road.x + road.width + firstLane,
    road.x + road.width + secondLane,
    (road.x + road.width * 2) + firstLane, 
    (road.x + road.width * 2) + secondLane, 
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

/**
 * This function halts the game
 */
function gameOver(){
    clearInterval(coinIntervalId)
    clearInterval(enemyIntervalId1)
    clearInterval(enemyIntervalId2)
    cancelAnimationFrame(animationId)
    gameState = 'gameover'
}