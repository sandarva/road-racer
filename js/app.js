const car = new Car(canvas.width / 2 - 15, canvas.height - 100, 30, 50, 'red')
// the left sidebar
const sideBarLeft = new SideBar(sideBarLeftImg, 0, 0, 50, canvas.height)
// the right sidebar
const sideBarRight = new SideBar(sideBarRightImg, canvas.width - 50, 0, 50, canvas.height)
// the road
const road = new Road(sideBarLeft.width, 0, (canvas.width - (sideBarLeft.width + sideBarRight.width)) / 3, canvas.height)

addEventListener('keydown', (event) => {
    // move car to the left on left arrow press
    if(event.code === 'ArrowLeft' && gameState === 'running'){
        car.moveLeft()
    }

    // move car to the left on right arrow press
    if(event.code === 'ArrowRight' && gameState === 'running'){
        car.moveRight()
    }

    // move car to the up on up arrow press
    if(event.code === 'ArrowUp' && gameState === 'running'){
        car.moveUp()
    }

    // move car to the down on down arrow press
    if(event.code === 'ArrowDown' && gameState === 'running'){
        car.moveDown()
    }
})

// const enemy1 = new Enemy(sideBarLeft.width + 10, 0, 30, 50)
animate()
generateEnemies()
generateCoins()
