/**
 * Road is the main road on which the player moves
 * A single road is of three lanes
 * 
 * x: the initial x position of the road
 * y: the initial y position of the road
 * width: the width of the road
 * height: the height of the road
 * speed: the number of pixels the road moves forward
 */
class Road{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = SPEED
    }

    // This method renders the three lanes of road along with three extra on top of screen
    draw(){
        context.fillStyle = 'gray'
        context.drawImage(roadImg, this.x, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width * 2, this.y, this.width, this.height)

        context.drawImage(roadImg, this.x, this.y - this.height, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width, this.y - this.height, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width * 2, this.y - this.height, this.width, this.height)
    }

    // This method gives the road a moving effect
    update() {
        this.y += this.speed;
    
        if (this.y >= this.height) {
            this.y = 0
        }
    
        this.draw();
    }
}

// Initializing road
const roadXPos = sideBarLeft.width
const roadYPos = 0
const roadWidth = (canvas.width - (sideBarLeft.width + sideBarRight.width)) / 3
const roadHeight = canvas.height
const road = new Road(sideBarLeft.width, 0, roadWidth, roadHeight)