import { gameboard } from '../modules/gameboard'
import { playerHuman } from '../modules/player'
import { playerCPU } from '../modules/playerCPU'

test('create player human', () => {
  const player = playerHuman()
  const board = gameboard(10, 10)
  const object = { name: 'simon', board }

  expect(JSON.stringify(player.create('simon'))).toEqual(JSON.stringify(object))
})

test('create CPU player', () => {
  const player2 = playerCPU()
  player2.create()
  const board = gameboard(10, 10)
  const object = { name: 'CPU', board }

  expect(JSON.stringify(player2.create('simon'))).toEqual(
    JSON.stringify(object)
  )
})

test('attack the cpu and set the attack on the rival board.', () => {
  let generateGameboardObject = {}
  const setGameboard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        generateGameboardObject[`${i},${j}`] = false
      }
    }
  }
  setGameboard()

  generateGameboardObject['0,1'] = true

  const player1 = playerHuman()
  player1.create('simon')

  const player2 = playerCPU()
  player2.create()

  expect(player1.attackPlayer(player2, [0, 1]).board).toEqual(
    generateGameboardObject
  )
})

test('attack the cpu and change turn', () => {
  let generateGameboardObject = {}
  const setGameboard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        generateGameboardObject[`${i},${j}`] = false
      }
    }
  }
  setGameboard()

  generateGameboardObject['0,1'] = true

  const player1 = playerHuman()
  player1.create('simon')

  const player2 = playerCPU()
  player2.create()
  player1.attackPlayer(player2, [0, 1])

  expect(player1.turn).toEqual(false)
})

test('cpu attack and set the player turn true', () => {
  let generateGameboardObject = {}
  const setGameboard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        generateGameboardObject[`${i},${j}`] = false
      }
    }
  }
  setGameboard()

  generateGameboardObject['0,1'] = true

  const player1 = playerHuman()
  player1.create('simon')

  const player2 = playerCPU()
  player2.create()
  player1.attackPlayer(player2, [0, 1])
  player2.attackPlayer(player1, [0, 1])

  expect(player1.turn).toEqual(true)
})

test('cpu attack and set the player board attacked', () => {
  let generateGameboardObject = {}
  const setGameboard = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        generateGameboardObject[`${i},${j}`] = false
      }
    }
  }
  setGameboard()

  generateGameboardObject['0,1'] = true

  const player1 = playerHuman()
  player1.create('simon')

  const player2 = playerCPU()
  player2.create()

  player1.attackPlayer(player2, [0, 1])

  expect(player2.attackPlayer(player1, [0, 1])).not.toEqual(
    generateGameboardObject
  )
})
