/**
 * Enemy are the enemy trucks that dedcrease the players life
 * There are 4 variants of the trucks
 * 
 * x: the initial x position of the enemy
 * y: the initial y position of the enemy
 * width: the width of the enemy
 * height: the height of the enemy
 * speed: the number of pixels the enemy moves forward
 * img: the image of the enemy
 */
class Enemy{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = 5
        
        this.img = generateRandom([truck1Img, truck2Img, truck3Img, truck4Img])

    }

    // This method renders the enemy i.e truck
    draw(){
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    // This method moves the enemy
    update(){
        this.y += this.speed
        this.draw()
    }
}