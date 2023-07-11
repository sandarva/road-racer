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
    const bullet = new Bullet(car.x + 2, car.y - 5, 30, 50)
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

// This function displays the score
function displayScore(){
    context.font = '30px cursive'
    context.fillStyle = 'white' 
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

    context.font = '32px cursive'
    context.fillStyle = 'white'
    const textWidth = context.measureText('GAMEOVER').width 
    context.fillText(`GAMEOVER`, (canvas.width / 2) - (textWidth / 2), canvas.height / 2 - 16);
    const scoreWidth = context.measureText(`YOUR SCORE IS : ${SCORE}`).width 
    context.fillText(`YOUR SCORE IS : ${SCORE}`, (canvas.width / 2) - (scoreWidth / 2), canvas.height / 2 + 60);
    gameState = 'gameover'
}

// This function continues the game
function startGame(){
    animate()
    generateEnemies()
    generateObstacle()
    generateCoins()
    gameState = 'running'
}

// This function pauses the game
function pauseGame(){
    gameState = 'paused'
    cancelAnimationFrame(animationId)
    clearInterval(enemyIntervalId1)
    clearInterval(enemyIntervalId2)
    clearInterval(coinIntervalId)
}

// This function halts the game and brings to the halting state
function restartGame(){
    init()
}

// This function initializes the game
function init(){
    cancelAnimationFrame(animationId)
    clearInterval(coinIntervalId)
    clearInterval(enemyIntervalId1)
    clearInterval(enemyIntervalId2)

    SCORE = 0
    ENEMIES = []
    BULLETS = []
    COINS = []
    OBSTACLES = []

    car.health = MAX_HEALTH
    car.lives = MAX_LIVES
    car.sendToInitalPos()

    animate()
    generateEnemies()
    generateObstacle()
    generateCoins()

    gameState = 'running'
}

// This function animates the game screen when game is not played
function preGameAnimation(){
    preAnimationId = requestAnimationFrame(preGameAnimation)

    context1.fillStyle = 'gray'
    context1.filter = 'blur(3px)';
    context1.drawImage(bgImage, 0, 0, canvas1.width, canvas1.height)
    context1.filter = 'none';

    startButton.draw()
    restartButton.draw()
    pauseButton.draw()
    helpButton.draw()

    sideBarLeft.update()
    sideBarRight.update()
    road.update()

    car.draw()

    // show full heart for each health
    for(let i = 0; i < car.health; i++){
        healthBar[i].draw(heartFullImg)
    }

    if(gameState === 'running'){
        cancelAnimationFrame(preAnimationId)
    }

    displayTitle()
}

function displayHighScore(){
    HIGHSCORE = localStorage.getItem('highscore')
    if(SCORE > HIGHSCORE){
        localStorage.setItem('highscore', SCORE)
        HIGHSCORE = localStorage.getItem('highscore')
    }
    context1.font = '24px cursive'
    context1.fillStyle = 'white' 
    context1.fillText(`HIGHSCORE: ${HIGHSCORE}`, 20, canvas.height - 30);
}

function displayLives(){
    context1.font = '24px cursive'
    context1.fillStyle = 'white' 
    context1.fillText(`LIVES: ${car.lives}`, 20, canvas.height - 60);
    context1.fillText(`HEALTH: `, 20, 55);
}

// THis function displays the game title in pre game Animation
function displayTitle(){
    context.font = '60px cursive'
    context.fillStyle = 'white'
    const textWidth = context.measureText('ROAD RACER').width  
    context.fillText(`ROAD RACER`, (canvas.width / 2) - (textWidth / 2), canvas.height / 2);
    context.font = '24px cursive'
    const textWidth1 = context.measureText('Press Space to start the game!!').width  
    context.fillText(`PRESS SPACE TO START THE GAME!!`, (canvas.width / 2) - (textWidth1 / 2) - 40, canvas.height / 2 + 45);
}