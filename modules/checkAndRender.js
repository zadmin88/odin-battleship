export const checkAndRender = (board, divClass) => {
  const div1 = document.querySelector(`.${divClass}`)
  const div = div1.querySelector('.board')
  let allChildren = div.querySelectorAll(':scope > div')
  const array = Object.entries(board.board)

  array.forEach((spot, idx) => {
    if (
      typeof spot[1] === 'boolean' &&
      spot[1] !== false &&
      !allChildren[idx].classList.contains('boom')
    ) {
      allChildren[idx].classList.add('missed')
    }

    if (spot[1] === 'hitted') {
      allChildren[idx].classList.remove('ship')
      allChildren[idx].classList.add('boom')
    }
  })
}
