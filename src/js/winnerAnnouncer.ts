export const announceWinner = (
  container: HTMLDivElement,
  heading: HTMLHeadElement
) => {
  container.classList.add('winner-container')
  heading.classList.add('winner-heading')

  document.body.appendChild(container)
  container.appendChild(heading)
  heading.innerText = 'You win!'
}
