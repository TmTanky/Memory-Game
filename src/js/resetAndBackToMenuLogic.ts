import { createCards } from './createCards'

interface InitializeResetAndBackToMenuProps {
  winner: {
    container: HTMLDivElement
    heading: HTMLHeadElement
  }
  rootCards: HTMLDivElement
  gameMenu: HTMLDivElement
  buttons: {
    back: HTMLButtonElement
    restart: HTMLButtonElement
  }
}

export const initializeResetAndBackToMenu = ({
  gameMenu,
  rootCards,
  winner,
  buttons: { back, restart }
}: InitializeResetAndBackToMenuProps) => {
  const { container, heading } = winner

  restart.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((node) => {
      node.remove()
    })

    createCards(rootCards, {
      container: container,
      heading: heading,
    }, restart)
    heading?.remove()
    container?.remove()
  })

  // Back To Menu Logic

  back.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((node) => {
      node.remove()
    })

    gameMenu.style.display = 'flex'
    rootCards.remove()
    heading?.remove()
    container?.remove()
  })
}
