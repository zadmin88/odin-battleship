import { v4 as uuidv4 } from 'uuid'

export const ship = (len) => {
  const id = uuidv4()
  const length = len
  let hits = 0
  return {
    id,
    length: length,
    hits: hits,
    hit() {
      return (this.hits += 1)
    },
    isSunk() {
      if (this.hits === this.length) {
        return true
      } else {
        return false
      }
    },
  }
}
