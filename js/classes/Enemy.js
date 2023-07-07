class Enemy{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.velocity = 0
        this.speed = 3
    }

    draw(){
        context.fillStyle = 'purple'
        context.drawImage(truckImg, this.x, this.y, this.width, this.height)
    }

    update(){
        this.velocity = this.speed
        this.y += this.velocity
        this.draw()
    }
}