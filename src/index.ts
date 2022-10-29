// Imports
import './styles/style.scss'
import { initializeGameMenu, initializeResetAndBackToMenu } from './js/index'

// Game Menu Vars
const gameMenu = document.createElement('div')
const gameTitle = document.createElement('h1')
const exitButton = document.createElement('button')
const startButton = document.createElement('button')
const topPortion = document.createElement('div')
const bottomPortion = document.createElement('div')

exitButton.classList.add('exit-game-btn')
startButton.classList.add('start-game-btn')
gameTitle.classList.add('game-title')

// Winner Vars

const winnerContainer = document.createElement('div')
const winnerHeading = document.createElement('h2')

// Card/Cards Vars

const rootCards = document.createElement('div')

// Initialize Game Menu & Starting Game

rootCards.classList.add('cards')

initializeGameMenu({
  buttons: {
    exit: exitButton,
    start: startButton,
  },
  gameMenu: gameMenu,
  gameTitle: gameTitle,
  portions: {
    bottom: bottomPortion,
    top: topPortion,
  },
  rootCards: rootCards,
  winner: {
    container: winnerContainer,
    heading: winnerHeading,
  },
})

// Reset Game Logic & Back To Menu

initializeResetAndBackToMenu({
  gameMenu,
  rootCards,
  winner: { container: winnerContainer, heading: winnerHeading },
})
