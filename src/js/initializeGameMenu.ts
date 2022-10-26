import { createCards } from './createCards'

interface InitializeGameMenuProps {
  rootCards: HTMLDivElement
  gameMenu: HTMLDivElement
  gameTitle: HTMLHeadingElement
  buttons: {
    start: HTMLButtonElement
    exit: HTMLButtonElement
  }
  portions: {
    top: HTMLDivElement
    bottom: HTMLDivElement
  }
  winner: {
    container: HTMLDivElement
    heading: HTMLHeadingElement
  }
}

export const initializeGameMenu = ({
  gameMenu,
  gameTitle,
  winner,
  buttons,
  portions,
  rootCards
}: InitializeGameMenuProps) => {
  const { container, heading } = winner
  const { exit, start } = buttons
  const { bottom, top } = portions

  gameTitle.innerHTML = 'Memory Game'
  gameMenu.classList.add('game-menu-container')

  exit.innerText = 'Exit'
  start.innerText = 'Play Game'

  document.body.appendChild(gameMenu)
  gameMenu.appendChild(top)
  gameMenu.appendChild(bottom)

  top.appendChild(gameTitle)

  bottom.appendChild(exit)
  bottom.appendChild(start)

  start.addEventListener('click', () => {
    gameMenu.style.visibility = 'hidden'
    createCards(rootCards, {
      container: container,
      heading: heading,
    })
    heading?.remove()
    container?.remove()
  })

  exit.addEventListener('click', () => {
    window.close()
  })
}
