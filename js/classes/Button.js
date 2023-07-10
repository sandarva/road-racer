/**
 * Button is the button UI inside the canvas
 * 
 * x: the initial x position of the player
 * y: the initial y position of the player
 * width: the width of the player car
 * height: the height of the player car
 * text: the text inside the button
 */
class Button{
    constructor(x, y, width, height, text){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.text = text
    }

    // This method renders the button
    draw(){
        context1.save()
        context1.shadowColor = "black";
        context1.shadowBlur = 10;
        context1.shadowOffsetX = 5;
        context1.shadowOffsetY = 5;
        context1.fillStyle = 'white'
        context1.fillRect(this.x, this.y, this.width, this.height)
        context1.restore()
        
        context1.font = '16px cursive'
        context1.fillStyle = '#000000'
        const textWidth = context1.measureText(this.text).width
        const textX = this.x + (this.width - textWidth) / 2
        const textY = this.y + (this.height + 12) / 2
        context1.fillText(this.text, textX, textY);
    }

    // This method checks if the button is clicked and returns boolean
    isClicked(mouseX, mouseY) {
        return (
            mouseX >= this.x &&
            mouseX <= this.x + this.width &&
            mouseY >= this.y &&
            mouseY <= this.y + this.height
        );
    }
}

// Initializing various buttons
const startButton = new Button(canvas1.width / 2 - 80, 150, 160, 50, "Start Game (Space)")
const restartButton = new Button(canvas1.width / 2 - 80, 220, 160, 50, "Restart Game (R)")
const pauseButton = new Button(canvas1.width / 2 - 80, 290, 160, 50, "Pause Game (P)")
const helpButton = new Button(canvas1.width / 2 - 80, 360, 160, 50, "Help (H)")