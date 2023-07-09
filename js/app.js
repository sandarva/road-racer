addEventListener('keydown', (event) => {
    // move car to the left on left arrow press
    if((event.code === 'ArrowLeft' || event.code === 'KeyA') && gameState === 'running'){
        car.moveLeft()
    }

    // move car to the left on right arrow press
    if((event.code === 'ArrowRight' || event.code === 'KeyD') && gameState === 'running'){
        car.moveRight()
    }

    // move car to the up on up arrow press
    if((event.code === 'ArrowUp' || event.code === 'KeyW') && gameState === 'running'){
        car.moveUp()
    }

    // move car to the down on down arrow press
    if((event.code === 'ArrowDown' || event.code === 'KeyS') && gameState === 'running'){
        car.moveDown()
    }
})

animate()
generateEnemies()
generateCoins()
