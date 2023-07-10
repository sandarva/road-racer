class Heart{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(img){
        context1.drawImage(img, this.x, this.y, this.width, this.height)
    }
}

const healthBar = [
    new Heart(canvas1.width - 240, 20, 50, 50), 
    new Heart(canvas1.width - 160, 20, 50, 50), 
    new Heart(canvas1.width - 80, 20, 50, 50)
]