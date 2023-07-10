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

    if((event.code === 'Space' || event.code === 'KeyJ') && gameState === 'running'){
        generateBullet()
    }

    if(event.code === 'KeyP' && gameState === 'running'){
        pauseGame()
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

canvas1.addEventListener("click", function(event) {
    // To get the x and y of the canvas i.e. the distance from the x and y of browser 
    const rect = canvas1.getBoundingClientRect();
    // The x position of mouse in the canvas
    const mouseX = event.clientX - rect.left;
    // The y position of mouse in the canvas
    const mouseY = event.clientY - rect.top;

    if (startButton.isClicked(mouseX, mouseY)) {
        console.log("Game Start");
    } else if (restartButton.isClicked(mouseX, mouseY)) {
        console.log("Restart Game");
    } else if (pauseButton.isClicked(mouseX, mouseY) && gameState === 'running') {
        pauseGame()
    } else if (helpButton.isClicked(mouseX, mouseY)) {
        console.log("Show Help");
    }
});

animate()
generateEnemies()
generateObstacle()
generateCoins()
