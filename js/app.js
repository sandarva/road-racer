// Event Listener to see if the player has pressed the movement keys
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

// Event Listener to see if the player is released the movement keys
addEventListener('keyup', (event) => {
    // move car to the left on left arrow press
    if((event.code === 'ArrowLeft' || event.code === 'KeyA') && gameState === 'running'){
        car.stopLeft()
    }

    // move car to the left on right arrow press
    if((event.code === 'ArrowRight' || event.code === 'KeyD') && gameState === 'running'){
        car.stopRight()
    }

    // move car to the up on up arrow press
    if((event.code === 'ArrowUp' || event.code === 'KeyW') && gameState === 'running'){
        car.stopUp()
    }

    // move car to the down on down arrow press
    if((event.code === 'ArrowDown' || event.code === 'KeyS') && gameState === 'running'){
        car.stopDown()
    }
})

animate()
generateEnemies()
generateCoins()
