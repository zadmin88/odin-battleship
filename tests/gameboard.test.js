import { ship } from '../modules/ship'
import { gameboard } from '../modules/gameboard'

let generateGameboardObject = {}
const setGameboard = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      generateGameboardObject[`${i},${j}`] = false
    }
  }
}

test('Position Ship', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  const shipOne = ship(3)
  generateGameboardObject['0,0'] =
    generateGameboardObject['0,1'] =
    generateGameboardObject['0,2'] =
      shipOne

  expect(
    gameboardTest.positionShip(shipOne, [0, 0], [0, 1], [0, 2])
  ).toStrictEqual(generateGameboardObject)
})

test('recieve Attack and call the ship', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  const shipOne = ship(3)
  generateGameboardObject['0,0'] =
    generateGameboardObject['0,1'] =
    generateGameboardObject['0,2'] =
      shipOne

  gameboardTest.positionShip(shipOne, [0, 0], [0, 1], [0, 2])

  gameboardTest.recieveAttack([0, 1])
  expect(shipOne.hits).toBe(1)
})

test('recieve Attack and mark the shot', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  generateGameboardObject['0,0'] = true

  expect(gameboardTest.recieveAttack([0, 0])).toStrictEqual(
    generateGameboardObject
  )
})

test('mark the shot over the ship', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  const shipOne = ship(3)
  generateGameboardObject['0,0'] =
    generateGameboardObject['0,1'] =
    generateGameboardObject['0,2'] =
      shipOne

  gameboardTest.positionShip(shipOne, [0, 0], [0, 1], [0, 2])
  generateGameboardObject['0,1'] = true
  expect(gameboardTest.recieveAttack([0, 1])).toStrictEqual(
    generateGameboardObject
  )
})

test('all the ships are sunk', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  const shipOne = ship(3)
  shipOne.hits = 3
  generateGameboardObject['0,0'] =
    generateGameboardObject['0,1'] =
    generateGameboardObject['0,2'] =
      shipOne

  const shipTwo = ship(3)
  shipTwo.hits = 3
  generateGameboardObject['2,0'] =
    generateGameboardObject['2,1'] =
    generateGameboardObject['2,2'] =
      shipTwo

  gameboardTest.positionShip(shipOne, [0, 0], [0, 1], [0, 2])
  gameboardTest.positionShip(shipTwo, [2, 0], [2, 1], [2, 2])

  expect(gameboardTest.areAllShipsSunk()).toBe(true)
})

test('one ship is not sunk', () => {
  setGameboard()
  const gameboardTest = gameboard(10, 10)
  const shipOne = ship(3)
  shipOne.hits = 3
  generateGameboardObject['0,0'] =
    generateGameboardObject['0,1'] =
    generateGameboardObject['0,2'] =
      shipOne

  const shipTwo = ship(3)
  shipTwo.hits = 2
  generateGameboardObject['2,0'] =
    generateGameboardObject['2,1'] =
    generateGameboardObject['2,2'] =
      shipTwo

  gameboardTest.positionShip(shipOne, [0, 0], [0, 1], [0, 2])
  gameboardTest.positionShip(shipTwo, [2, 0], [2, 1], [2, 2])

  expect(gameboardTest.areAllShipsSunk()).toBe(false)
})
