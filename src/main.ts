const gameMenu = document.createElement('div')
const gameTitle = document.createElement('h1')
gameTitle.innerHTML = 'Memory Game'
gameMenu.classList.add('game-menu-container')
const exitButton = document.createElement('button')
const startButton = document.createElement('button')
const topPortion = document.createElement('div')
const bottomPortion = document.createElement('div')

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
})

exitButton.addEventListener('click', () => {
  window.close()
})

// Creating Cards Logic

const rootCardsContainer = document.querySelector('.cards') as HTMLDivElement
const restartButton = document.querySelector(
  '.restart-button'
) as HTMLButtonElement

const matchers = ['heart', 'heart', 'diamond', 'diamond', 'circle', 'circle']

const shuffleCards = (arr: string[]) => {
  return arr.sort(() => 0.5 - Math.random())
}

const createCards = () => {
  shuffleCards(matchers).forEach((item, index) => {
    const cardContainer = document.createElement('button')
    const front = document.createElement('div')
    const back = document.createElement('div')

    cardContainer.appendChild(front)
    cardContainer.appendChild(back)

    front.classList.add('front-card')
    back.classList.add('back-card')
    rootCardsContainer.appendChild(cardContainer)
    cardContainer.classList.add('card')
    front.innerText = item
    cardContainer.value = item
    cardContainer.id = `${item}${index}`
  })
}

createCards()

// Card Functionality

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
      // alert('score')
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

// Reset Game Logic

const cardsObserver = new MutationObserver((mutations) => {
  const cardsLength = mutations[0].target.childNodes.length

  if (cardsLength === 0) {
    restartButton.style.display = 'initial'
  }
})

cardsObserver.observe(rootCardsContainer, {
  childList: true,
})

restartButton?.addEventListener('click', () => {
  restartButton.style.display = 'none'
  createCards()
})
