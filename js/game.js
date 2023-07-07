let animationId
function animate(){
    // console.log(car);
    animationId = requestAnimationFrame(animate)
    context.fillStyle = 'gray'
    context.fillRect(0, 0, canvas.width, canvas.height)
    // context.drawImage(roadImg, 50, 0, 200,canvas.height)

    sideBarLeft.draw()
    sideBarRight.draw()
    road.draw()

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
        car.x = canvas.width / 2 - 15
        car.y = canvas.height  - 100
    }

    // if the health of the car decreases to 0 decrease life by 1
    if(car.health === 0){
        car.lives -= 1
        car.health = 3
    }

    // gameover if car has 0 lives
    if(car.lives === 0){
        cancelAnimationFrame(animationId)
        gameState = 'gameover'
    }

    enemies.forEach((enemy, enemyIndex) => {
        enemy.update()

        // collision detection for enemies and player
        if(
            car.y < enemy.y + enemy.height &&
            car.x < enemy.x + enemy.width &&
            car.x + car.width > enemy.x &&
            car.y + car.height > enemy.y
        ){
            console.log('collided');
            car.decreaseHealth()
            car.x = canvas.width / 2 - 15
            car.y = canvas.height  - 100
            // cancelAnimationFrame(animationId)
            // gameState = 'gameover'
        }

        // remove the enemy if it is outside the screen(canvas)
        if(enemy.y > canvas.height){
            setTimeout(() => {
                enemies.splice(enemyIndex, 1)
            }, 0)
        }
    })

    car.draw()
}

let gameState = "running"