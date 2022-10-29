interface InitializeGameOptionsProps {
  container: HTMLDivElement
  restart: HTMLButtonElement
  back: HTMLButtonElement
}

export const initializeGameOptions = ({
  back,
  container,
  restart,
}: InitializeGameOptionsProps) => {
  document.body.appendChild(container)

  back.innerText = 'Back'
  restart.innerText = 'Restart'

  container.appendChild(back)
  container.appendChild(restart)
}
