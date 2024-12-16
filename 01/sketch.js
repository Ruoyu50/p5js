function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 225);
  
  blendMode(BLEND);

  push()
  //f(x)=1 / 2 - [(1 / 2)^(x+1)]
  let k = -2
  let base = 1 / 2
  let exponent = -k
  let scalenumber = base ** exponent
  let result = base - (base ** (exponent + 1))
  let resultX = width * result
  let resultY = height * result
  translate(resultX, resultY)  
  scale(scalenumber)
  //console.log(scalenumber)
  
  push()
  translate(width/2, height/2)
  blendMode(OVERLAY)
  fill(0,0,63.25)
  stroke(0,0,127.5)
  strokeWeight(100)
  ellipse(0,0,1650,1375)
  pop()
  
  push()
  translate(width/2, height/2)
  fill(255, 200, 200)
  stroke(255, 210, 210)
  strokeWeight(20)
  rectMode(CENTER)
  rect(0, 0, 1200, 1000, 100)
  fill(255, 225, 225)
  stroke(255, 210, 210)
  rect(0, 0, 1050, 875, 87.5)
  pop()
  
  push()
  translate(width/2, height/2)
  rotate(PI / -8)
  fill(175)
  noStroke()
  rectMode(CENTER)
  rect(0, 0, 520, 95)
  pop()

  push()
  translate(width/2, height/2)
  rotate(PI / -8)
  fill(175)
  stroke(175)
  strokeWeight(20)
  ellipse(0, 50, 500, 400)
  pop()
    
  push()
  translate(width/2,height/2)
  rotate(PI/-8)
  fill(125)
  stroke(125)
  strokeWeight(20)
  ellipse(0, -50, 500, 400)
  pop()
  
  push()
  translate(width/2, height/2)
  rotate(PI / -8)
  fill(255, 225, 225)
  stroke(255, 255, 225)
  strokeWeight(20)
  arc(0, -50, 500, 400, PI/15, PI-PI/15)
  pop()
  
  push()
  translate(width/2, height/2)
  rotate(PI/-8)
  fill(255, 225, 225)
  stroke(125)
  strokeWeight(20)
  arc(0, 50, 500, 400, PI+PI/15, 2*PI-PI/15)
  pop()
  
  push()
  translate(width/2, height/2)
  rotate(PI / -8)
  noFill()
  stroke(150)
  strokeWeight(20)
  ellipse(0, -50, 500, 400)
  pop()
  pop()
  
  
  text("Ponsant's ring", mouseX, mouseY)
}