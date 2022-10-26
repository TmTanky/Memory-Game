import { startCardsFunctionality } from './cardFunctionality'

export const createCards = (
  rootCards: HTMLDivElement,
  winner: { container: HTMLDivElement; heading: HTMLHeadElement }
) => {
  const { container, heading } = winner
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
  startCardsFunctionality(container, heading)
}
