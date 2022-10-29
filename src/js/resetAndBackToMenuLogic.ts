import { createCards } from './createCards'

const restartButton = document.querySelector(
  '.restart-button'
) as HTMLButtonElement
const backToMenuButton = document.querySelector(
  '.back-to-menu-button'
) as HTMLButtonElement

interface InitializeResetAndBackToMenuProps {
  winner: {
    container: HTMLDivElement
    heading: HTMLHeadElement
  }
  rootCards: HTMLDivElement
  gameMenu: HTMLDivElement
}

export const initializeResetAndBackToMenu = ({
  gameMenu,
  rootCards,
  winner,
}: InitializeResetAndBackToMenuProps) => {
  const { container, heading } = winner

  restartButton.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((node) => {
      node.remove()
    })

    createCards(rootCards, {
      container: container,
      heading: heading,
    })
    heading?.remove()
    container?.remove()
  })

  // Back To Menu Logic

  backToMenuButton.addEventListener('click', () => {
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
