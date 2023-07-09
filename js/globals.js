/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')

// The width and height of the game screen
canvas.height = innerHeight - 10
canvas.width = innerWidth / 2

const context = canvas.getContext('2d')

/**
 * GLOBAL VARIABLES
 */
// Variables
let SCORE = 0
let ENEMIES = []
let COINS = []
let animationId
let enemyIntervalId1, enemyIntervalId2
let coinIntervalId

// Constants
// The speed of the road and coin
const SPEED = 3
// The maximum health of the player in one life
const MAX_HEALTH = 3
// The maximum lives of the player
const MAX_LIVES = 3
// The height of the coin
const COIN_HEIGHT = 30
// The width of the coin
const COIN_WIDTH = 30
// The height of the enemy
const ENEMY_HEIGHT = 80
// The width of the enemy
const ENEMY_WIDTH = 30