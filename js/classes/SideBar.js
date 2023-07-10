/**
 * Sidebar is the sidebars in the game
 * which is rendered in the left and right
 * 
 * x: the initial x position of the sidebar
 * y: the initial y position of the sidebar
 * width: the width of the sidebar
 * height: the height of the sidebar
 * img: the image of the sidebar
 */
class SideBar{
    constructor(img, x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.speed = SPEED
        
        this.img = img
    }

    // This method to renders the sidebar
    draw(){
        context.fillStyle = "green"
        context.drawImage(this.img, this.x, this.y, this.width, this.height)
        context.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
    }

    // This method gives the sidebar a moving effect
    update(){
        this.y += this.speed
        if (this.y >= this.height) {
            this.y = 0
        }
        this.draw()
    }
}

// the left sidebar
const sideBarLeft = new SideBar(sideBarLeftImg, 0, 0, 50, canvas.height)
// the right sidebar
const sideBarRight = new SideBar(sideBarRightImg, canvas.width - 50, 0, 50, canvas.height)