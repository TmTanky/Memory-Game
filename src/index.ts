// Imports
import './styles/style.scss'
import {
  initializeGameMenu,
  initializeResetAndBackToMenu,
  initializeGameOptions,
} from './js/index'

// Game Menu Vars
const gameMenu = document.createElement('div')
const gameTitle = document.createElement('h1')
const exitButton = document.createElement('button')
const startButton = document.createElement('button')
const topPortion = document.createElement('div')
const bottomPortion = document.createElement('div')

// Game Options Vars

const optionsContainer = document.createElement('div')
const restartbutton = document.createElement('button')
const backToMenubutton = document.createElement('button')

optionsContainer.classList.add('game-options')
restartbutton.classList.add('restart-button')
backToMenubutton.classList.add('back-to-menu-button')

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
    restart: restartbutton
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

initializeGameOptions({
  container: optionsContainer,
  back: backToMenubutton,
  restart: restartbutton,
})

// Reset Game Logic & Back To Menu

initializeResetAndBackToMenu({
  gameMenu,
  rootCards,
  winner: { container: winnerContainer, heading: winnerHeading },
  buttons: { back: backToMenubutton, restart: restartbutton },
})
