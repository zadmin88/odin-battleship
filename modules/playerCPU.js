import { gameboard } from './gameboard'

export const playerCPU = () => {
  return {
    // id,
    create() {
      this.name = 'CPU'
      this.board = gameboard(10, 10)
      this.turn = false
      return {
        name: this.name,
        board: this.board,
      }
    },

    attackPlayer(player) {
      const array = Object.entries(player.board.board)

      const posiblesHits = array.filter(
        ([key, value]) => value != true && value != 'hitted'
      )

      const randomIndex = Math.floor(Math.random() * posiblesHits.length)
      const attackcoord = `${[posiblesHits[randomIndex][0]]}`
      if (this.turn) {
        player.board.recieveAttack(attackcoord.split(','))
        player.turn = true
        this.turn = false
        return player.board
      }
    },
  }
}
