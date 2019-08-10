const dom = document.querySelector('#clock')

const ctx = dom.getContext('2d')

const width = ctx.canvas.width
const height = ctx.canvas.height
var radius = width / 2

function drawCircle(ctx, r) {
  ctx.save()
  // 将原点设置到中心（初始在左上角）
  ctx.translate(r, r)
  // 开始路径
  ctx.beginPath()
  // 设置宽度
  ctx.lineWidth = 10
  // 画圆 
  // 圆心坐标  因为这里已经定位到中心了，所以0,0
  ctx.arc(0, 0, r - 5, 0, 2 * Math.PI, false)
  // 用线描绘
  ctx.stroke()

  const hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
  ctx.font = '18px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  hours.forEach((item, index) => {
    let rad = 2 * Math.PI / 12 * index
    let x = Math.cos(rad) * (r - 30)
    let y = Math.sin(rad) * (r - 30)
    ctx.fillText(item, x, y)
  })

  for(let i = 0; i < 60; i++) {
    let rad = 2 * Math.PI /  60 * i
    let x = Math.cos(rad) * (r - 16)
    let y = Math.sin(rad) * (r - 16)
    ctx.beginPath()
    if (i % 5 === 0) {
      ctx.fillStyle = '#000'
    } else {
      ctx.fillStyle = '#ccc'
    }
    ctx.arc(x, y, 2, 0, 2 * Math.PI, false)
    ctx.fill()
  }
}

function drawHour (hour, min, r) {
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 6
  ctx.lineCap = 'round'
  // 顺序很重要
  // 一定要先rotate，再画线，否则就会错
  let rad = 2 * Math.PI / 12 * hour
  let mrad = 2 * Math.PI / 12 * (min / 60)
  ctx.rotate(rad + mrad)
  ctx.moveTo(0, 10)
  ctx.lineTo(0, -r / 2)
  ctx.stroke()
  ctx.restore()
}

function drawMin (min, r) {
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  let rad = 2 * Math.PI / 60 * min
  ctx.rotate(rad)
  ctx.moveTo(0, 10)
  ctx.lineTo(0, - (r / 2 + 15))
  ctx.stroke()
  ctx.restore()
}

function drawSecond (second, r) {
  ctx.save()
  ctx.beginPath()
  ctx.fillStyle = '#c14543'
  let rad = 2 * Math.PI / 60 * second
  ctx.rotate(rad)
  ctx.moveTo(-2, 10)
  ctx.lineTo(2, 10)
  ctx.lineTo(1, - (r / 2 + 25))
  ctx.lineTo(-1, - (r / 2 + 25))
  ctx.fill()
  ctx.restore()
}

function drawDot () {
  ctx.beginPath()
  ctx.fillStyle = '#fff'
  ctx.arc(0, 0, 3, 0, 2 * Math.PI, false)
  ctx.fill()
  
}

function drawClock () {
  ctx.clearRect(0, 0, width, height)
  const now = new Date()
  const hour = now.getHours()
  const min = now.getMinutes()
  const second = now.getSeconds()
  drawCircle(ctx, radius)
  drawDot()
  drawHour(hour, min, radius)
  drawMin(min, radius)
  drawSecond(second, radius)
  ctx.restore()
}
drawClock()
setInterval(() => {
  drawClock()
}, 1000);