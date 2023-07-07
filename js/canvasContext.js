/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')

// The width and height of the game screen
canvas.height = innerHeight - 10
canvas.width = innerWidth / 2

const context = canvas.getContext('2d')


// constants
/**
 * enemies constants
 */
//the height of the enemy
// const height = 80
// // the width of the enemy
// const width = 30
// // all the x coordinates the enemies can spawn in
// const allX = [
//     sideBarLeft.width + 20, 
//     sideBarLeft.width + 80, 
//     sideBarLeft.width + 150, 
//     sideBarLeft.width + 215, 
//     sideBarLeft.width + 285, 
//     sideBarLeft.width + 350
// ]