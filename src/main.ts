const cardsContainer = document.querySelector('.cards') as HTMLDivElement

const matchers = ['heart', 'heart', 'diamond', 'diamond', 'circle', 'circle']

const shuffleCards = (arr: string[]) => {
  return arr.sort(() => 0.5 - Math.random())
}

console.log(shuffleCards(matchers))
console.log(shuffleCards(matchers))
console.log(shuffleCards(matchers))
console.log(shuffleCards(matchers))

const createCards = () => {
  shuffleCards(matchers).forEach((item, index) => {
    const card = document.createElement('button')

    cardsContainer.appendChild(card)
    card.classList.add('card')
    card.innerText = item
    card.value = item
    card.id = `${item}${index}`
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
      alert('score')
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
