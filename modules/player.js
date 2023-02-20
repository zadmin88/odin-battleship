import { gameboard } from './gameboard'
import { v4 as uuidv4 } from 'uuid'

export const playerHuman = () => {
  //   const id = uuidv4()
  return {
    create(name) {
      this.name = name
      this.board = gameboard(10, 10)
      this.turn = true
      return {
        name: this.name,
        board: this.board,
      }
    },

    attackPlayer(player, coord) {
      if (this.turn) {
        player.board.recieveAttack(coord)
        player.turn = true
        this.turn = false

        return player.board
      }
    },
  }
}
