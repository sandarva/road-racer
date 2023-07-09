function animate(){
    animationId = requestAnimationFrame(animate)
    context.fillStyle = 'gray'
    context.fillRect(0, 0, canvas.width, canvas.height)

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
        car.x < sideBarLeft.width || 
        car.x + car.width > sideBarRight.x ||
        car.y < 0 ||
        car.y + car.height > canvas.height
    ){
        car.decreaseHealth()
        console.log("health: ", car.health);
        console.log("lives: ", car.lives);
        car.sendToInitalPos()
    }

    // if the health of the car decreases to 0 decrease life by 1
    if(car.health === 0){
        car.lives -= 1
        car.health = MAX_HEALTH
    }

    // gameover if car has 0 lives
    if(car.lives === 0){
        cancelAnimationFrame(animationId)
        gameState = 'gameover'
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

    car.draw()
}

let gameState = "running"