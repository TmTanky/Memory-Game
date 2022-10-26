// Imports
import { initializeGameMenu, initializeResetAndBackToMenu } from './js/index'
import './styles/style.css'

// Game Menu Vars
const gameMenu = document.createElement('div')
const gameTitle = document.createElement('h1')
const exitButton = document.createElement('button')
const startButton = document.createElement('button')
const topPortion = document.createElement('div')
const bottomPortion = document.createElement('div')

// Winner Vars

const winnerContainer = document.createElement('div')
const winnerHeading = document.createElement('h2')

// Card/Cards Vars

const rootCards = document.createElement('div')

// Initialize Game Menu & Starting Game

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

// Creating Cards & Starting Game Logic

rootCards.classList.add('cards')

// Reset Game Logic & Back To Menu

initializeResetAndBackToMenu({
  gameMenu,
  rootCards,
  winner: { container: winnerContainer, heading: winnerHeading },
})
