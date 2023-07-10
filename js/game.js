function animate(){
    animationId = requestAnimationFrame(animate)
    context.fillStyle = 'gray'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context1.fillStyle = 'gray'
    context1.fillRect(0, 0, canvas.width, canvas.height)

    sideBarLeft.draw()
    sideBarRight.draw()
    road.update()

    /**
     * decrease health if car collides to the sidebars 
     * or the top and bottom of the screen
     * 
     * Collision detection for sidebars
     **/
    if(
        checkCollision(car, sideBarLeft) || 
        checkCollision(car, sideBarRight)
    ){
        car.decreaseHealth()
        console.log("health: ", car.health);
        console.log("lives: ", car.lives);
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
            console.log("health: ", car.health);
            console.log("lives: ", car.lives);
            car.sendToInitalPos()
            car.makeInvincible()
        }

        // remove the enemy if it is outside the screen(canvas)
        if(enemy.y > canvas.height){
            removeObject(enemyIndex, ENEMIES)
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

    car.update()
    for(let i = 0; i < car.health; i++){
        healthBar[i].draw(heartFullImg)
    }

    for(let i = car.health; i < MAX_HEALTH; i++){
        healthBar[i].draw(heartEmptyImg)
    }
}

let gameState = "running"