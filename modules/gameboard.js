export const gameboard = (len, hei) => {
  let board = {}
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < hei; j++) {
      board[`${i},${j}`] = false
    }
  }

  return {
    board: board,
    positionShip(ship, ...args) {
      args.forEach((coor) => {
        this.board[`${coor[0]},${coor[1]}`] = ship
      })

      return this.board
    },

    recieveAttack(array) {
      if (typeof this.board[`${array[0]},${array[1]}`] === 'object') {
        const ship = this.board[`${array[0]},${array[1]}`]
        this.board[`${array[0]},${array[1]}`] = 'hitted'
        ship.hit()
        return this.board
      } else {
        this.board[`${array[0]},${array[1]}`] = true
        return this.board
      }
    },
    areAllShipsSunk() {
      let stillFloat
      const array = Object.entries(this.board)
      const ships = array.filter(([key, value]) => typeof value === 'object')
      const uniqueShips = Array.from(new Set(ships.map((a) => a[1].id))).map(
        (id) => {
          return ships.find((a) => a[1].id === id)
        }
      )

      uniqueShips.forEach((ship) => {
        if (!this.board[ship[0]].isSunk()) {
          stillFloat = true
        }
      })

      if (stillFloat) {
        return false
      } else {
        return true
      }
    },
  }
}
