import { createCards } from './createCards'

interface InitializeGameMenuProps {
  rootCards: HTMLDivElement
  gameMenu: HTMLDivElement
  gameTitle: HTMLHeadingElement
  buttons: {
    start: HTMLButtonElement
    exit: HTMLButtonElement
    restart: HTMLButtonElement
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
  rootCards,
}: InitializeGameMenuProps) => {
  const { container, heading } = winner
  const { exit, start, restart } = buttons
  const { bottom, top } = portions

  exit.classList.add('exit-game-btn')
  start.classList.add('start-game-btn')
  gameTitle.classList.add('game-title')

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
    gameMenu.style.display = 'none'
    createCards(
      rootCards,
      {
        container: container,
        heading: heading,
      },
      restart
    )
    heading?.remove()
    container?.remove()
  })

  exit.addEventListener('click', () => {
    alert('paganahin to na mag close tab!')
  })
}
