import { announceWinner } from './winnerAnnouncer'

export const startCardsFunctionality = (
  container: HTMLDivElement,
  heading: HTMLHeadElement,
  restart: HTMLButtonElement
) => {
  const rootCardsContainer = document.querySelector('.cards') as HTMLDivElement
  const cards = document.querySelectorAll(
    '.card'
  ) as NodeListOf<HTMLButtonElement>

  let pickCounter = 0
  let cardShowsUp = 0
  let firstCard: HTMLButtonElement
  let secondCard: HTMLButtonElement
  let firstPick: string
  let secondPick: string
  let firstPickId: string
  let secondPickId: string

  cards.forEach((item) => {
    item.addEventListener('click', (e) => {
      const event = e.target as HTMLButtonElement
      pickCounter = pickCounter + 1

      if (pickCounter === 1) {
        firstCard = item
        firstPick = event.value as string
        firstPickId = event.id
        firstCard.classList.toggle('show')
        cardShowsUp = cardShowsUp + 1
      }

      const value1 = firstCard.childNodes[0] as HTMLDivElement
      value1.style.visibility = 'visible'

      if (pickCounter === 2) {
        secondCard = item
        secondPick = event.value as string
        secondPickId = event.id
        secondCard.classList.toggle('show')
        cardShowsUp = cardShowsUp + 1
      }

      const value2 = secondCard.childNodes[0] as HTMLDivElement
      value2.style.visibility = 'visible'

      if (pickCounter === 2) {
        cardShowsUp + cardShowsUp + 1
        pickCounter = 0

        setTimeout(() => {
          firstCard.classList.toggle('show')
          secondCard.classList.toggle('show')
          value1.style.visibility = 'hidden'
          value2.style.visibility = 'hidden'
        }, 1000)
      }

      if (firstPick === secondPick && firstPickId !== secondPickId) {
        document.getElementById(`${firstPickId}`).classList.add('remove')
        document.getElementById(`${secondPickId}`).classList.add('remove')
      }
    })

    item.addEventListener('transitionend', () => {
      if (firstPick === secondPick && firstPickId !== secondPickId) {
        firstCard.remove()
        secondCard.remove()
      }
    })
  })

  const cardsObserver = new MutationObserver((mutations) => {
    const cardsLength = mutations[0].target.childNodes.length

    if (cardsLength === 0) {
      restart.style.display = 'initial'
      announceWinner(container, heading)
    } else {
      restart.style.display = 'none'
    }
  })

  cardsObserver.observe(rootCardsContainer, {
    childList: true,
  })
}
