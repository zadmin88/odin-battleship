import { checkAndRender } from './checkAndRender'

export const createBoards = (div, p1, p2) => {
  const arrayp1 = Object.entries(p1.board.board)
  const arrayp2 = Object.entries(p2.board.board)

  const playerHumanBoard = document.createElement('div')
  playerHumanBoard.classList.add('playerHuman')

  const boardDivP = document.createElement('div')
  boardDivP.classList.add('board')

  const boardDivC = document.createElement('div')
  boardDivC.classList.add('board')

  const playername = document.createElement('h3')
  playername.classList.add('playerName')
  playername.textContent = `${p2.name}`
  playerHumanBoard.appendChild(playername)

  const playerCPUBoard = document.createElement('div')
  playerCPUBoard.classList.add('playerCPU')

  const CPUname = document.createElement('h3')
  CPUname.classList.add('CPUname')
  CPUname.textContent = `${p1.name}`
  playerCPUBoard.appendChild(CPUname)

  arrayp2.forEach((spot) => {
    const spotHuman = document.createElement('div')
    spotHuman.setAttribute('value', `${spot[0]}`)

    spotHuman.addEventListener(
      'click',
      () => {
        if (p1.turn) {
          const coords = spot[0].split(',')
          const newBoard = p1.attackPlayer(p2, coords)
          checkAndRender(newBoard, 'playerHuman')
          if (newBoard.areAllShipsSunk()) {
            alert(`${p1.name} WON`)
            location.reload()
          }
        }

        if (p2.turn) {
          const newBoard = p2.attackPlayer(p1)
          checkAndRender(newBoard, 'playerCPU')
          if (newBoard.areAllShipsSunk()) {
            alert(`CPU WON`)
            location.reload()
          }
        }
      },
      { once: true }
    )

    boardDivP.appendChild(spotHuman)
  })

  arrayp1.forEach((spot) => {
    const spotCPU = document.createElement('div')
    spotCPU.setAttribute('value', `${spot[0]}`)

    if (typeof spot[1] === 'object') {
      spotCPU.classList.add('ship')
    }

    boardDivC.appendChild(spotCPU)
  })

  playerHumanBoard.appendChild(boardDivP)
  playerCPUBoard.appendChild(boardDivC)

  div.appendChild(playerCPUBoard)
  div.appendChild(playerHumanBoard)

  return div
}
