const car = new Car(canvas.width / 2 - 15, canvas.height - 100, 30, 50, 'red')
const sideBarLeft = new SideBar(0, 0, 50, canvas.height)
const sideBarRight = new SideBar(canvas.width - 50, 0, 50, canvas.height)
const road = new Road(sideBarLeft.width, 0, canvas.width - (sideBarLeft.width + sideBarRight.width), canvas.height)

addEventListener('keydown', (event) => {
    if(event.code === 'ArrowLeft'){
        car.moveLeft()
    }

    if(event.code === 'ArrowRight'){
        car.moveRight()
    }
})

animate()