class Car{
    constructor(x, y, width, height, color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.color = color
        this.velocity = -20

        this.health = 3
        this.lives = 3
    }

    draw(){
        context.fillStyle = this.color
        // context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(carImg, this.x, this.y, this.width, this.height)
    }

    moveLeft(){
        this.x += this.velocity
        this.draw()
    }

    moveRight(){
        this.x -= this.velocity
        this.draw()
    }

    moveUp(){
        this.y += this.velocity
        this.draw()
    }

    moveDown(){
        this.y -= this.velocity
        this.draw()
    }

    decreaseHealth(){
        this.health -= 1
    }

    decreaseLife(){
        this.life -= 1
    }

    sendToInitalPos(){
        this.x = canvas.width / 2 - 15
        this.y = canvas.height  - 100
    }

    update(){
        this.draw()
    }
}