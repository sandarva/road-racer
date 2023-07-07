/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')

// The width and height of the game screen
canvas.height = innerHeight - 10
canvas.width = innerWidth / 2

const context = canvas.getContext('2d')