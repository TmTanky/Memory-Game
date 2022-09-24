const cardsContainer = document.querySelector('.cards') as HTMLDivElement

const matchers = ['heart', 'heart', 'diamond', 'diamond', 'circle', 'circle']

const shuffleCards = (arr: string[]) => {
  return arr.sort(() => 0.5 - Math.random())
}

console.log(shuffleCards(matchers))

const createCards = () => {
  for (let x = 0; x < shuffleCards(matchers).length; x++) {
    const card = document.createElement('button')
    console.log(matchers[x])

    cardsContainer.appendChild(card)
    card.classList.add('card')
    card.innerText = matchers[x]
    card.value = matchers[x]

    // card.addEventListener('click', () => {
    // })
  }
}

createCards()

const cards = document.querySelectorAll('.card')

let pickCounter = 0
let firstPick: string
let secondPick: string

cards.forEach((item) => {
  item.addEventListener('click', (e) => {
    const event = e.target as HTMLButtonElement

    pickCounter = pickCounter + 1
    console.log(pickCounter)

    if (pickCounter === 1) {
      firstPick = event.value as string
    }

    if (pickCounter === 2) {
      secondPick = event.value as string
    }

    if (firstPick === secondPick) {
      alert('score')
    }

    if (pickCounter === 2) {
      pickCounter = 0
    }
  })
})
