let score = 0
class Coin{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.points = generateRandom([1, 5, 10])
        this.img = {
            1: coin1Img,
            5: coin5Img,
            10: coin10Img
        }
        this.velocity = 0
        this.speed = 3
    }

    draw(){
        context.drawImage(this.img[this.points], this.x, this.y, this.width, this.height)
    }

    increasePoints(){
        console.log("score: ", score);
        score += this.points
    }

    update(){
        this.velocity = this.speed
        this.y += this.velocity
        this.draw()
    }
}