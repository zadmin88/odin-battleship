import { playerHuman } from '../modules/player'
import { playerCPU } from '../modules/playerCPU'
import { ship } from '../modules/ship'
import { createBoards } from '../modules/createBoards'
import { layout } from '../modules/layout'
import './style.css'

const container = document.querySelector('.container')

const player1 = playerHuman()
player1.create('Simon')

const player2 = playerCPU()
player2.create()

const ship1 = ship(3)
const ship2 = ship(3)
const ship3 = ship(4)
const ship4 = ship(2)
const ship5 = ship(2)
let ranPosition = (num) => {
  return Math.floor(Math.random() * num)
}

let shipPos = ranPosition(7)
player1.board.positionShip(
  ship1,
  [0, shipPos],
  [0, shipPos + 1],
  [0, shipPos + 2]
)

player1.board.positionShip(ship2, [4, 1], [4, 2], [4, 3])
player1.board.positionShip(ship3, [4, 5], [5, 5], [6, 5], [7, 5])
player1.board.positionShip(ship4, [8, 1], [8, 2])
player1.board.positionShip(ship5, [9, 7], [9, 8])

const shipcpu1 = ship(3)
const shipcpu2 = ship(3)
const shipcpu3 = ship(4)
const shipcpu4 = ship(2)
const shipcpu5 = ship(2)

shipPos = ranPosition(7)
player2.board.positionShip(
  shipcpu1,
  [0, shipPos],
  [0, shipPos + 1],
  [0, shipPos + 2]
)
player2.board.positionShip(shipcpu2, [6, 1], [6, 2], [6, 3])
player2.board.positionShip(shipcpu3, [4, 7], [5, 7], [6, 7], [7, 7])
player2.board.positionShip(shipcpu4, [8, 4], [8, 5])
player2.board.positionShip(shipcpu5, [9, 3], [9, 4])

// const humanShips = [ship1, ship2, ship3, ship4, ship5]
// const CPUShips = [shipcpu1, shipcpu2, shipcpu3, shipcpu4, shipcpu5]

layout(container)
createBoards(container, player1, player2)
