/**
 * The coin is a object in the game that increases the points
 * There are three variants of coin i.e [1, 5, 10]
 * The points increase according to the variant
 * 
 * x: the initial x position of the coin
 * y: the initial y position of the coin
 * width: the width of the coin
 * height: the height of the coin
 * speed: the number of pixels the coin moves forward
 * points: the value of the coin
 * img: the image of the coin
 */
class Coin{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = SPEED
        
        this.points = generateRandom([1, 5, 10])
        this.img = {
            1: coin1Img,
            5: coin5Img,
            10: coin10Img
        }
    }

    // This method renders the coin
    draw(){
        context.drawImage(this.img[this.points], this.x, this.y, this.width, this.height)
    }

    // This method increase the point according to the coin variant
    increasePoints(){
        SCORE += this.points
    }

    // This method moves the coin along with the road
    update(){
        this.y += this.speed
        this.draw()
    }
}