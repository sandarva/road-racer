/**
 * Car is the main player
 * 
 * x: the initial x position of the player
 * y: the initial y position of the player
 * width: the width of the player car
 * height: the height of the player car
 * speed: the number of pixels the car moves in a direction
 * health: the health of the car [MAX_HEALTH]
 * lives: the health of the car [MAX_LIVES]
 */
class Car{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        
        this.speed = -20

        this.health = 3
        this.lives = 3
    }

    // This method renders the car/player
    draw(){
        context.drawImage(carImg, this.x, this.y, this.width, this.height)
    }

    // This method moves the car left
    moveLeft(){
        this.x += this.speed
        this.draw()
    }

    // This method moves the car right
    moveRight(){
        this.x -= this.speed
        this.draw()
    }

    // This method moves the car up
    moveUp(){
        this.y += this.speed
        this.draw()
    }

    //This method moves the car down
    moveDown(){
        this.y -= this.speed
        this.draw()
    }

    // This method decreases the health of car in case of collison
    decreaseHealth(){
        this.health -= 1
    }

    // This method decreases the life of car in case health reaches 0
    decreaseLife(){
        this.life -= 1
    }

    // This method sends the car to initial position
    sendToInitalPos(){
        this.x = canvas.width / 2 - 15
        this.y = canvas.height  - 100
    }
}

// Initializing the car
const carXPos = canvas.width / 2 - 15
const carYPos = canvas.height - 100
const car = new Car(carXPos, carYPos, 30, 50)