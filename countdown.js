const WIDTH = 400
const HEIGHT = 300
const PI = Math.PI
const R = 2

const X = 30
const Y = 30

const colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"]

let balls = []

let now = null

const cd = function () {
  const canvas = document.getElementById('countdown')

  canvas.width = WIDTH
  canvas.height = HEIGHT

  const ctx = canvas.getContext('2d')
  render(ctx)

  // renderBall(ctx)
}

function render (ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  now = new Date()

  const hour = now.getHours()
  const min = now.getMinutes()
  const second = now.getSeconds()

  const hour1 = parseInt(hour / 10)
  const hour2 = parseInt(hour % 10)

  const min1 = parseInt(min / 10)
  const min2 = parseInt(min % 10)

  const second1 = parseInt(second / 10)
  const second2 = parseInt(second % 10)

  const numWidth = 2 * (R + 1) * 7
  const symbolWidth = 2 * (R + 1) * 5
  const space = 2 * (R + 1)
  renderDigit(X + numWidth * 0 + symbolWidth * 0 + space * 0, Y, hour1, ctx)
  renderDigit(X + numWidth * 1 + symbolWidth * 0 + space * 1, Y, hour2, ctx)
  renderDigit(X + numWidth * 2 + symbolWidth * 0 + space * 2, Y, 10, ctx)

  renderDigit(X + numWidth * 2 + symbolWidth * 1 + space * 3, Y, min1, ctx)
  renderDigit(X + numWidth * 3 + symbolWidth * 1 + space * 4, Y, min2, ctx)
  renderDigit(X + numWidth * 4 + symbolWidth * 1 + space * 5, Y, 10, ctx)

  renderDigit(X + numWidth * 4 + symbolWidth * 2 + space * 6, Y, second1, ctx)
  renderDigit(X + numWidth * 5 + symbolWidth * 2 + space * 7, Y, second2, ctx)
}

function updateTime (ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  const next = new Date()
  if (next !== now) {
    const hour = next.getHours()
    const min = next.getMinutes()
    const second = next.getSeconds()

    const hour1 = parseInt(hour / 10)
    const hour2 = parseInt(hour % 10)

    const min1 = parseInt(min / 10)
    const min2 = parseInt(min % 10)

    const second1 = parseInt(second / 10)
    const second2 = parseInt(second % 10)

    const numWidth = 2 * (R + 1) * 7
    const symbolWidth = 2 * (R + 1) * 5
    const space = 2 * (R + 1)
    renderDigit(X + numWidth * 0 + symbolWidth * 0 + space * 0, Y, hour1, ctx)
    renderDigit(X + numWidth * 1 + symbolWidth * 0 + space * 1, Y, hour2, ctx)
    renderDigit(X + numWidth * 2 + symbolWidth * 0 + space * 2, Y, 10, ctx)

    renderDigit(X + numWidth * 2 + symbolWidth * 1 + space * 3, Y, min1, ctx)
    renderDigit(X + numWidth * 3 + symbolWidth * 1 + space * 4, Y, min2, ctx)
    renderDigit(X + numWidth * 4 + symbolWidth * 1 + space * 5, Y, 10, ctx)

    renderDigit(X + numWidth * 4 + symbolWidth * 2 + space * 6, Y, second1, ctx)
    renderDigit(X + numWidth * 5 + symbolWidth * 2 + space * 7, Y, second2, ctx)

    const hourNow = now.getHours()
    const minNow = now.getMinutes()
    const secondNow = now.getSeconds()

    const hourN1 = parseInt(hourNow / 10)
    const hourN2 = parseInt(hourNow % 10)

    const minN1 = parseInt(minNow / 10)
    const minN2 = parseInt(minNow % 10)

    const secondN1 = parseInt(secondNow / 10)
    const secondN2 = parseInt(secondNow % 10)

    if (hour1 !== hourN1) {
      const temp = digit[hour1]
      for(let i = 0; i < temp.length; i++) {
        for(let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 0 + symbolWidth * 0 + space * 0 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    if (hour2 !== hourN2) {
      const temp = digit[hour2]
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 1 + symbolWidth * 0 + space * 1 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    if (min1 !== minN1) {
      const temp = digit[min1]
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 2 + symbolWidth * 1 + space * 3 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    if (min2 !== minN2) {
      const temp = digit[min2]
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 3 + symbolWidth * 1 + space * 4 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    if (second1 !== secondN1) {
      const temp = digit[second1]
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 4 + symbolWidth * 2 + space * 6 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    if (second2 !== secondN2) {
      const temp = digit[second2]
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
          if (temp[i][j] === 1) {
            const tempX = X + numWidth * 5 + symbolWidth * 2 + space * 7 + 2 * (R + 1) * j + (R + 1)
            const tempY = Y + 2 * (R + 1) * i + (R + 1)
            addBall(tempX, tempY)
          }
        }
      }
    }

    now = next
  }
}

function renderDigit (x, y, num, ctx) {
  const temp = digit[num]
  ctx.fillStyle = 'rgb(0,102,153)'
  for(let i = 0; i < temp.length; i++) {
    for(let j = 0; j < temp[i].length; j++) {
      if (temp[i][j] === 1) {
        ctx.beginPath()
        const tempX = x + 2 * (R + 1) * j + (R + 1)
        const tempY = y + 2 * (R + 1) * i + (R + 1)
        ctx.arc(tempX, tempY, R, 0, 2 * PI)
        ctx.fill()
      }
    }
  }
}

function renderBall (ctx) {
  balls.forEach(item => {
    ctx.beginPath()
    ctx.fillStyle = item.color
    ctx.arc(item.x, item.y, R, 0, 2 * PI)
    ctx.fill()
  })
}

function addBall (x, y) {
  const ball = {
    x: x,
    y: y,
    color: colors[Math.floor(10 * Math.random())],
    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
    vy: -5,
    g: 1 + Math.random()
  }
  balls.push(ball)
}

function updateBall () {
  for(let i = 0; i < balls.length; i++) {
    balls[i].x = balls[i].x + balls[i].vx
    balls[i].y = balls[i].y + balls[i].vy
    balls[i].vy = balls[i].vy + balls[i].g

    // console.log(balls[i].y)
    if(balls[i].y > HEIGHT - R / 2) {
      balls[i].y = HEIGHT - R
      balls[i].vy = -balls[i].vy * 0.7
    }
  }

  var cnt = 0
  for (var i = 0; i < balls.length; i++)
    if (balls[i].x + R > 0 && balls[i].x - R < WIDTH)
      balls[cnt++] = balls[i]

  while (balls.length > cnt) {
    balls.pop();
  }
  
}

cd()


setInterval(() => {
  const canvas = document.getElementById('countdown')
  const ctx = canvas.getContext('2d')
  // cd()
  updateTime(ctx)
  renderBall(ctx)
  updateBall(ctx)
  // updateBall()
}, 50);