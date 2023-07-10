/**
 * Bullet is the bullet which is sent when space is pressed
 * 
 * x: the initial x position of the bullet
 * y: the initial y position of the bullet
 * width: the width of the bullet
 * height: the height of the bullet
 * 
 * speed: the number of pixels the bullet moves forward
 */
class Bullet{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = -10
    }

    // This method renders the bullet
    draw(){
        context.drawImage(bulletImg, this.x, this.y, this.width, this.height)
    }

    // This method makes the bullet move
    shoot(){
        this.y += this.speed
        this.draw()
    }
}