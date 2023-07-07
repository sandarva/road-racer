class Car{
    constructor(x, y, width, height, color){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.color = color
        this.velocity = -5

        this.health = 3
        this.lives = 3
    }

    draw(){
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }

    moveLeft(){
        this.x += this.velocity
        this.draw()
    }

    moveRight(){
        this.x -= this.velocity
        this.draw()
    }

    decreaseHealth(){
        this.health -= 1
    }

    decreaseLife(){
        this.life -= 1
    }

    update(){
        this.draw()
    }
}