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
        const enemy = new Enemy(posX, POS_Y, ENEMY_WIDTH, ENEMY_HEIGHT)
        ENEMIES.push(enemy)
    }, 1000)

    enemyIntervalId2 = setInterval(() => {
        const posX = generateRandom(allX)
        // enemy
        const enemy = new Enemy(posX, POS_Y, ENEMY_WIDTH, ENEMY_HEIGHT)
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
        const coin = new Coin(posX, POS_Y, COIN_WIDTH, COIN_HEIGHT)
        COINS.push(coin)
    }, 5000)
}

// This function generates the bullet and push into bullets array
function generateBullet(){
    const bullet = new Bullet(car.x + 2, car.y - 5, 30, 30)
    BULLETS.push(bullet)
}

// This function generates obstacles and push into obstacle array
function generateObstacle(){
    obstacleIntervalId1 = setInterval(() => {
        const firstLane = 15
        const secondLane = 120
        const allXBlock = [
            road.x + firstLane, 
            road.x + secondLane, 
            road.x + road.width + firstLane,
            road.x + road.width + secondLane,
            (road.x + road.width * 2) + firstLane, 
            (road.x + road.width * 2) + secondLane, 
        ]
        const posX = generateRandom(allXBlock)
        // obstacle
        const obstacle = new Obstacle(posX, POS_Y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT)
        OBSTACLES.push(obstacle)
    }, 2000)
}

// This function increases the score by 5
function increaseScore(){
    SCORE += 5
}

function displayScore(){
    context.font = '30px cursive'
    context.fillStyle = 'white' 
    const textWidth = context1.measureText(this.text).width
    const textX = this.x + (this.width - textWidth) / 2
    const textY = this.y + (this.height + 12) / 2
    context.fillText(`SCORE: ${SCORE}`, 20, 50);
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

function startGame(){
    requestAnimationFrame(animationId)
}

function init(){
    SCORE = 0
    ENEMIES = []
    BULLETS = []
    COINS = []
    OBSTACLES = []
}