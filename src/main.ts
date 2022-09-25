const rootCardsContainer = document.querySelector('.cards') as HTMLDivElement

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
    front.innerText = item
    back.classList.add('back-card')
    rootCardsContainer.appendChild(cardContainer)
    cardContainer.classList.add('card')
    front.innerText = item
    cardContainer.value = item
    cardContainer.id = `${item}${index}`
  })
}

createCards()

const cards = document.querySelectorAll('.card')

let pickCounter = 0
let firstPick: string
let secondPick: string
let firstPickId: string
let secondPickId: string

cards.forEach((item) => {
  item.addEventListener('click', (e) => {
    const event = e.target as HTMLButtonElement
    // item.classList.add('show')

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
