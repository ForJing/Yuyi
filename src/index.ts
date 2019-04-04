import './index.scss'
import sheet from './images/running-sprite-sheet.png'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

const img = new Image()

const runnerCell = [
  { left: 0, top: 0, width: 47, height: 64 },
  { left: 55, top: 0, width: 44, height: 64 },
  { left: 107, top: 0, width: 39, height: 64 },
  { left: 150, top: 0, width: 46, height: 64 },
  { left: 208, top: 0, width: 49, height: 64 },
  { left: 265, top: 0, width: 46, height: 64 },
  { left: 320, top: 0, width: 42, height: 64 },
  { left: 380, top: 0, width: 35, height: 64 },
  { left: 425, top: 0, width: 35, height: 64 },
]
let last = 0
let cellIndex = 0

function animate(time: number) {
  if (time - last > 1000) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    const cell = runnerCell[cellIndex]
    context.drawImage(
      img,
      cell.left,
      cell.top,
      cell.width,
      cell.height,
      canvas.width / 2,
      canvas.height / 2,
      cell.width,
      cell.height
    )
    last = time
    cellIndex++
    if (cellIndex == runnerCell.length) {
      cellIndex = 0
    }
  }
  requestAnimationFrame(animate)
}

img.onload = function() {
  requestAnimationFrame(animate)
}

img.src = sheet
