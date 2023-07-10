function animate(){
    animationId = requestAnimationFrame(animate)

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

    /**
     * decrease health if car collides to the sidebars 
     * or the top and bottom of the screen
     * 
     * Collision detection for sidebars
     **/
    if(
        checkCollision(car, sideBarLeft) || 
        checkCollision(car, sideBarRight) ||
        car.y + car.height > canvas.height ||
        car.y < 0
    ){
        car.decreaseHealth()
        // console.log("health: ", car.health);
        // console.log("lives: ", car.lives);
        car.sendToInitalPos()
        car.makeInvincible()
    }

    // if the health of the car decreases to 0 decrease life by 1
    if(car.health === 0){
        car.lives -= 1
        car.health = MAX_HEALTH
    }

    // gameover if car has 0 lives
    if(car.lives === 0){
        gameOver()
    }

    /**
     * all enemies rendering in canvas with collision
     * detection and remove it after it goes out of screen
     **/  
    ENEMIES.forEach((enemy, enemyIndex) => {
        enemy.update()

        // collision detection for enemies and player
        if(checkCollision(car, enemy)){
            car.decreaseHealth()
            // console.log("health: ", car.health);
            // console.log("lives: ", car.lives);
            car.sendToInitalPos()
            car.makeInvincible()
        }

        // remove the enemy if it is outside the screen(canvas)
        if(enemy.y > canvas.height){
            removeObject(enemyIndex, ENEMIES)
        }

        BULLETS.forEach((bullet, bulletIndex) => {
            if(checkCollision(bullet, enemy)){
                removeObject(enemyIndex, ENEMIES)
                removeObject(bulletIndex, BULLETS)
                increaseScore()
                console.log(SCORE);
            }
        })
    })

    /**
     * all obstacle rendering in canvas with collision
     * detection and remove it after it goes out of screen
     * 
     * Game over if collided
     **/
    OBSTACLES.forEach((obstacle, obstacleIndex) => {
        obstacle.update()

        // collision detection for enemies and player
        if(checkCollision(car, obstacle) && !car.isInvincible){
            gameOver()
        }

        // remove the enemy if it is outside the screen(canvas)
        if(obstacle.y > canvas.height){
            removeObject(obstacleIndex, OBSTACLES)
        }
    })

    /**
     * all coins rendering in canvas with collision
     * detection and remove it after it goes out of screen
     **/  
    COINS.forEach((coin, coinIndex) => {
        coin.update()

        if(checkCollision(car, coin)){
            coin.increasePoints()
            removeObject(coinIndex, COINS)
        }

        // remove the coin if it is outside the screen(canvas)
        if(coin.y > canvas.height){
            removeObject(coinIndex, COINS)
        }
    })

    // show full heart for each health
    for(let i = 0; i < car.health; i++){
        healthBar[i].draw(heartFullImg)
    }
    
    // show empty heart if health decreases
    for(let i = car.health; i < MAX_HEALTH; i++){
        healthBar[i].draw(heartEmptyImg)
    }
    
    /**
     * all bullets rendering in canvas remove it after it goes out of screen
     **/ 
    BULLETS.forEach((bullet, bulletIndex) => {
        bullet.shoot()
        
        if(bullet.y < 0){
            removeObject(bulletIndex, BULLETS)
        }
    })

    car.update()
    displayScore()
}

let gameState = "initial-game"