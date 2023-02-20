export const layout = (container) => {
  const title = document.createElement('h1')
  title.classList.add('title')
  title.textContent = 'BattleShips'

  container.appendChild(title)
}
