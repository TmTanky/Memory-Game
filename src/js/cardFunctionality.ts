import { announceWinner } from './winnerAnnouncer'

export const startCardsFunctionality = (
  container: HTMLDivElement,
  heading: HTMLHeadElement,
  restart: HTMLButtonElement
) => {
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
