/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas')
const canvas1 = document.querySelector('#canvas1')

// The width and height of the game screen
canvas.height = canvas1.height = innerHeight - 10
canvas.width = innerWidth / 2
canvas1.width = innerWidth / 4

const context = canvas.getContext('2d')
const context1 = canvas1.getContext('2d')

/**
 * GLOBAL VARIABLES
 */
// Variables
let SCORE = 0
let ENEMIES = []
let BULLETS = []
let COINS = []
let OBSTACLES = []
let animationId
let enemyIntervalId1, enemyIntervalId2
let coinIntervalId
let obstacleIntervalId
let preAnimationId

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
const ENEMY_HEIGHT = 100
// The width of the enemy
const ENEMY_WIDTH = 50
// The height of the obstacle
const OBSTACLE_HEIGHT = 30
// The width of the obstacle
const OBSTACLE_WIDTH = 80
// The starting position of the objects
const POS_Y = -10
// the highscore from local storage
let HIGHSCORE
if(localStorage.getItem('highscore')){
    HIGHSCORE = localStorage.getItem('highscore')
}else{
    localStorage.setItem('highscore', 0) 
    HIGHSCORE = localStorage.getItem('highscore')
}