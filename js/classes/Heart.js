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

const gap = 60
const healthBar = [
    new Heart(canvas1.width - gap*3, 20, 50, 50), 
    new Heart(canvas1.width - gap*2, 20, 50, 50), 
    new Heart(canvas1.width - gap, 20, 50, 50)
]