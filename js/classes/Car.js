/**
 * Car is the main player
 * 
 * x: the initial x position of the player
 * y: the initial y position of the player
 * width: the width of the player car
 * height: the height of the player car
 * 
 * speed: the number of pixels the car moves in a direction
 * 
 * health: the health of the car [MAX_HEALTH]
 * lives: the health of the car [MAX_LIVES]
 * 
 * isVisible: to determine if the car is rendered or not
 * isInvincible: to determine if the car is invincible or not
 * isInvincibleInterval: the interval id of the isInvincible
 * invincibleDuration: the duration till which the player is invincible
 * 
 * isMovingLeft: to determine if the player is pressing the movement key left
 * isMovingRight: to determine if the player is pressing the movement key right
 * isMovingUp: to determine if the player is pressing the movement key up
 * isMovingDown: to determine if the player is pressing the movement key down
 */
class Car{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        
        this.speed = -10

        this.health = 3
        this.lives = 3

        this.isVisible = true
        this.isInvincible = false
        this.isInvincibleInterval = null
        this.invincibleDuration = 3000

        this.isMovingLeft = false
        this.isMovingRight = false
        this.isMovingUp = false
        this.isMovingDown = false
    }

    // This method renders the car/player
    draw(){
        if(this.isVisible){
            context.drawImage(carImg, this.x, this.y, this.width, this.height)
        }
    }

    // This method makes the player move smoothly
    update(){
        if (this.isMovingLeft) {
            if(this.x < sideBarLeft.width && this.isInvincible){
                this.isMovingLeft = false
            }else{
                this.x += this.speed;
            }
        }
        if (this.isMovingRight) {
            if(this.x + this.width > sideBarRight.x && this.isInvincible){
                this.isMovingRight = false
            }else{
                this.x -= this.speed;
            } 
        }
        if (this.isMovingUp) {
            if(this.y < 0 && this.isInvincible){
                this.isMovingUp = false
            }else{
                this.y += this.speed;
            }
        }
        if (this.isMovingDown) {
            if(this.y + this.height > canvas.height && this.isInvincible){
                this.isMovingDown = false
            }else{
                this.y -= this.speed;
            }
        }

        this.draw();
    }

    // This method moves the car left
    moveLeft(){
        this.isMovingLeft = true
    }

    // This method stops the car from moving left
    stopLeft(){
        this.isMovingLeft = false
    }

    // This method moves the car right
    moveRight(){
        this.isMovingRight = true
    }

    // This method stops the car from moving right
    stopRight(){
        this.isMovingRight = false
    }

    // This method moves the car up
    moveUp(){
        this.isMovingUp = true
    }

    // This method stops the car from moving up
    stopUp(){
        this.isMovingUp = false
    }

    //This method moves the car down
    moveDown(){
        this.isMovingDown = true
    }

    // This method stops the car from moving down
    stopDown(){
        this.isMovingDown = false
    }

    // This method decreases the health of car in case of collison
    decreaseHealth(){
        if(!this.isInvincible){
            this.health -= 1
        }
    }

    // This method decreases the life of car in case health reaches 0
    decreaseLife(){
        if(!this.isInvincible){
            this.life -= 1
        }
    }

    // This method sends the car to initial position
    sendToInitalPos(){
        if(!this.isInvincible){
            this.x = canvas.width / 2 - 15
            this.y = canvas.height  - 100
        }
    }

    // This method make the player invincible for some time
    makeInvincible(){
        if(!this.isInvincible){
            this.isInvincible = true
            this.isInvincibleInterval = setInterval(() => {
                this.isVisible = !this.isVisible;
            }, 200)
            
            setTimeout(() => {
                clearInterval(this.isInvincibleInterval)
                this.isInvincible = false
                this.isVisible = true
            }, this.invincibleDuration)
        }
    }
}

// Initializing the car
const carXPos = canvas.width / 2 - 15
const carYPos = canvas.height - 100
const car = new Car(carXPos, carYPos, 30, 50)