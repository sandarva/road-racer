/**
 * Obstacle are the barricades that results in gameover
 * 
 * x: the initial x position of the obstacle
 * y: the initial y position of the obstacle
 * width: the width of the obstacle
 * height: the height of the obstacle
 * speed: the number of pixels the obstacle moves forward
 */
class Obstacle{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = SPEED
    }

    // This method renders the enemy i.e truck
    draw(){
        context.drawImage(obstacleImg, this.x, this.y, this.width, this.height)
    }

    // This method moves the enemy
    update(){
        this.y += this.speed
        this.draw()
    }
}