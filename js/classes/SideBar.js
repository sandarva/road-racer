class SideBar{
    constructor(img, x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.img = img
    }

    draw(){
        context.fillStyle = 'green'
        // context.fillRect(this.x, this.y, this.width, this.height)
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}