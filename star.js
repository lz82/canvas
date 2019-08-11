var WIDTH = 800
var HEIGHT = 400

var GW = 600
var GH = 300
var girlPic = new Image()
girlPic.src = './img/girl.jpg'

var starPic = new Image()
starPic.src = './img/star.png'

var paddingLeft = (WIDTH - GW) / 2
var paddingTop = (HEIGHT - GH) / 2

var ctx = null

var stars = []

class Star {
  constructor (sx, x, y) {
    this.sx = sx
    this.x = x
    this.y = y
  }
}

window.onload = function () {
  const canvas = document.getElementById('star')

  canvas.width = WIDTH
  canvas.height = HEIGHT

  ctx = canvas.getContext('2d')

  for(let i = 0; i < 60; i++) {
    let randomSx = Math.floor(Math.random() * 7)
    let randomX = 100 + Math.floor(Math.random() * 600)
    let randomY = 50 + Math.floor(Math.random() * 300)
    let temp = new Star(randomSx, randomX, randomY)
    stars.push(temp)
  }
  drawBg()
  drawGirl()
  drawStar()
  animation()
}

function drawBg () {
  ctx.fillStyle = '#393550'
  ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

function drawGirl () {
  ctx.drawImage(girlPic, 100, 50, 600, 300)
}

function drawStar () {
  stars.forEach(star => {
    ctx.drawImage(starPic, star.sx * 7, 0, 7, 7, star.x, star.y, 7, 7)
  }) 
}

function update () {
  stars.forEach(star => {
    star.sx = star.sx + 1
    if (star.sx > 6) {
      star.sx = 0
    }
    star.y = star.y + 2 * Math.random()
    star.x = star.x + 3 * Math.random() - 1.5
    // console.log(star.sx)
    ctx.drawImage(starPic, star.sx * 7, 0, 7, 7, star.x, star.y, 7, 7)
  })
}

function animation () {
  window.requestAnimationFrame(animation)
  // update()
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
  drawBg()
  drawGirl()
  drawStar()
  update()
  
  // setInterval(() => {
  //   ctx.clearRect(0, 0, WIDTH, HEIGHT)
  //   drawBg()
  //   drawGirl()
  //   drawStar()
  //   update()
  // }, 50)
}