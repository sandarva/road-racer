class Enemy{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.img = generateRandom([truck1Img, truck2Img, truck3Img, truck4Img])

        this.velocity = 0
        this.speed = 5
    }

    draw(){
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    update(){
        this.velocity = this.speed
        this.y += this.velocity
        this.draw()
    }
}