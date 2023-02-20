import { ship } from '../modules/ship.js'

test('return the length of the ship', () => {
  const testShip = ship(3)
  expect(testShip.length).toBe(3)
})

test('return the number oh hits', () => {
  const testShip = ship(3)
  testShip.hit()
  testShip.hit()
  expect(testShip.hits).toBe(2)
})

test('is the ship sunk', () => {
  const testShip = ship(3)
  testShip.hit()
  testShip.hit()
  testShip.hit()
  expect(testShip.isSunk()).toBe(true)
})
