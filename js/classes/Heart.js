/**
 * Heart is the heart UI for denoting the health
 * 
 * x: the initial x position of the heart
 * y: the initial y position of the heart
 * width: the width of the heart
 * height: the height of the heart
 */
class Heart{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    /**
     * This method renders the heart
     * @param {Image} img : the image to render
     */
    draw(img){
        context1.drawImage(img, this.x, this.y, this.width, this.height)
    }
}

// Initializing heart
const gap = 60
const healthBar = [
    new Heart(canvas1.width - gap*3, 20, 50, 50), 
    new Heart(canvas1.width - gap*2, 20, 50, 50), 
    new Heart(canvas1.width - gap, 20, 50, 50)
]