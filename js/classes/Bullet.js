class Bullet{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = -10
    }

    draw(){
        context.drawImage(bulletImg, this.x, this.y, this.width, this.height)
    }

    shoot(){
        this.y += this.speed
        this.draw()
    }
}