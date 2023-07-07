function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber(allowedValues) {
    const randomIndex = Math.floor(Math.random() * allowedValues.length);
    return allowedValues[randomIndex];
}

let enemies = []
let intervalId1, intervalId2, intervalId3
const height = 80
const width = 30
// generate the enemies in 1 sec and 1.5sec 
function generateEnemies(){
    intervalId1 = setInterval(() => {
        // all the x coordinates the enemies can spawn in
        const allX = [
            sideBarLeft.width + 20, 
            sideBarLeft.width + 80, 
            sideBarLeft.width + 150, 
            sideBarLeft.width + 215, 
            sideBarLeft.width + 285, 
            sideBarLeft.width + 350
        ]
        const posX = generateRandomNumber(allX)
        // enemy
        const enemy = new Enemy(posX, -height, width, height)
        enemies.push(enemy)
    }, 1000)

    intervalId2 = setInterval(() => {
        const allX = [
            sideBarLeft.width + 20, 
            sideBarLeft.width + 80, 
            sideBarLeft.width + 150, 
            sideBarLeft.width + 215, 
            sideBarLeft.width + 285, 
            sideBarLeft.width + 350
        ]
        const posX = generateRandomNumber(allX)
        // enemy
        const enemy = new Enemy(posX, -height, width, height)
        enemies.push(enemy)
    }, 1500)
}