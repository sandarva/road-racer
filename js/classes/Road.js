class Road{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.velocity = 0
        this.speed = 5
    }

    draw(){
        context.fillStyle = 'gray'
        context.drawImage(roadImg, this.x, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width, this.y, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width * 2, this.y, this.width, this.height)

        context.drawImage(roadImg, this.x, this.y - this.height, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width, this.y - this.height, this.width, this.height)
        context.drawImage(roadImg, this.x + this.width * 2, this.y - this.height, this.width, this.height)
    }

    update() {
        this.velocity = this.speed;
        this.y += this.velocity;
    
        if (this.y >= this.height) {
            const remainingHeight = this.y % this.height;
            this.y = -remainingHeight;
        }
    
        this.draw();
    }
}