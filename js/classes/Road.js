class Road{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.velocity = 0
        this.speed = 3
    }

    draw(){
        context.fillStyle = 'gray'
        context.drawImage(roadImg, this.x, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width * 2, this.y, this.width, this.height)
    }
}