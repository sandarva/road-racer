let animationId
function animate(){
    console.log(car);
    animationId = requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    if(car.x < sideBarLeft.width || car.x + car.width > sideBarRight.x){
        car.decreaseHealth()
        car.x = canvas.width / 2 - 15
    }

    if(car.health === 0){
        car.lives -= 1
        car.health = 3
    }

    if(car.lives === 0){
        cancelAnimationFrame(animationId)
    }

    sideBarLeft.draw()
    sideBarRight.draw()
    road.draw()
    car.draw()
}