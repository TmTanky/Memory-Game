// Imports 

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

// Initialize Game Menu

gameTitle.innerHTML = 'Memory Game'
gameMenu.classList.add('game-menu-container')

exitButton.innerText = 'Exit'
startButton.innerText = 'Play Game'

document.body.appendChild(gameMenu)
gameMenu.appendChild(topPortion)
gameMenu.appendChild(bottomPortion)

topPortion.appendChild(gameTitle)

bottomPortion.appendChild(exitButton)
bottomPortion.appendChild(startButton)

startButton.addEventListener('click', () => {
  gameMenu.style.visibility = 'hidden'
  createCards()
  winnerHeading?.remove()
  winnerContainer?.remove()
})

exitButton.addEventListener('click', () => {
  window.close()
})

// Winner Announcer

const announceWinner = () => {
  winnerContainer.classList.add('winner-container')
  winnerHeading.classList.add('winner-heading')

  document.body.appendChild(winnerContainer)
  winnerContainer.appendChild(winnerHeading)
  winnerHeading.innerText = 'You win!'
}

// Card Functionality

const startCardsFunctionality = () => {
  const rootCardsContainer = document.querySelector('.cards') as HTMLDivElement
  const cards = document.querySelectorAll('.card')

  let pickCounter = 0
  let firstPick: string
  let secondPick: string
  let firstPickId: string
  let secondPickId: string

  cards.forEach((item) => {
    item.addEventListener('click', (e) => {
      const event = e.target as HTMLButtonElement
      pickCounter = pickCounter + 1

      if (pickCounter === 1) {
        firstPick = event.value as string
        firstPickId = event.id
      }

      if (pickCounter === 2) {
        secondPick = event.value as string
        secondPickId = event.id
      }

      if (firstPick === secondPick && firstPickId !== secondPickId) {
        document.querySelector(`#${firstPickId}`)?.remove()
        document.querySelector(`#${secondPickId}`)?.remove()
      }

      if (pickCounter === 2) {
        pickCounter = 0
        firstPick = ''
        secondPick = ''
        firstPickId = ''
        secondPickId = ''
      }
    })
  })

  const cardsObserver = new MutationObserver((mutations) => {
    const cardsLength = mutations[0].target.childNodes.length

    if (cardsLength === 0) {
      announceWinner()
    }
  })

  cardsObserver.observe(rootCardsContainer, {
    childList: true,
  })
}

// Creating Cards & Starting Game Logic

rootCards.classList.add('cards')

const createCards = () => {
  document.body.appendChild(rootCards)

  const matchers = ['heart', 'heart', 'diamond', 'diamond', 'circle', 'circle']

  const shuffleCards = (arr: string[]) => {
    return arr.sort(() => 0.5 - Math.random())
  }

  shuffleCards(matchers).forEach((item, index) => {
    const cardContainer = document.createElement('button')
    const front = document.createElement('div')
    const back = document.createElement('div')

    cardContainer.appendChild(front)
    cardContainer.appendChild(back)

    front.classList.add('front-card')
    back.classList.add('back-card')
    rootCards.appendChild(cardContainer)
    cardContainer.classList.add('card')
    front.innerText = item
    cardContainer.value = item
    cardContainer.id = `${item}${index}`
  })
  startCardsFunctionality()
}

// Reset Game Logic

const restartButton = document.querySelector(
  '.restart-button'
) as HTMLButtonElement
const backToMenuButton = document.querySelector(
  '.back-to-menu-button'
) as HTMLButtonElement

restartButton.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((node) => {
    node.remove()
  })

  createCards()
  winnerHeading?.remove()
  winnerContainer?.remove()
})

// Back To Menu Logic

backToMenuButton.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((node) => {
    node.remove()
  })

  gameMenu.style.visibility = 'visible'
  rootCards.remove()
  winnerHeading?.remove()
  winnerContainer?.remove()
})
