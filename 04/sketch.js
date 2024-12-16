let input;
let region = "CN";
let currentMode = 1;

function setup() {
  createCanvas(640, 640);
  input = createInput();
  input.position(20, 20);
  input.size(360);
  input.attribute('placeholder', 'Type CN or NY and hit Enter...');
  input.elt.addEventListener('keypress', handleKeyPress);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  stroke(255, 0, 0);
  noFill(); 

  let now = moment.tz(region === "CN" ? "Asia/Shanghai" : "America/New_York");
  let timeString = now.format("HH:mm:ss");
  let dateString = region === "CN" ? now.format("YYYY/MM/DD") : now.format("MM/DD/YYYY"); 

  drawHands(now); 

  if (currentMode === 1) {
    style01(timeString, dateString);
  } else if (currentMode === 2) {
    style02(timeString, dateString);
  } else if (currentMode === 3) {
    style03(timeString, dateString);
  }

 
  textSize(64);
  stroke(255, 0, 0); 
  strokeWeight(2); 
  noFill(); 
  text(region, width / 2, height / 2 - 80);
}

function drawHands(now) {
  let sec = now.seconds();
  let min = now.minutes();
  let hr = now.hours() % 12; 

  stroke(127.5, 255, 255); // 青色
  strokeWeight(2);
  noFill();

  let secondAngle = map(sec, 0, 60, 0, TWO_PI) - HALF_PI;
  let minuteAngle = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
  let hourAngle = map(hr, 0, 12, 0, TWO_PI) - HALF_PI;

  if (currentMode === 1) {
    let radius = 300 / 2;
    drawHand(width / 2, height / 2, secondAngle, radius * 4 / 5, 10, 1);
    drawHand(width / 2, height / 2, minuteAngle, radius * 2 / 5, 10, 1.5);
    drawHand(width / 2, height / 2, hourAngle, radius / 5, 10, 2);
  } else if (currentMode === 2) {
    let radius = 300 / 2;
    drawHand(width / 2, height / 2, secondAngle, radius * 4 / 5, 8, 1);
    drawHand(width / 2, height / 2, minuteAngle, radius * 2 / 5, 8, 1.5);
    drawHand(width / 2, height / 2, hourAngle, radius / 5, 8, 2);
  } else if (currentMode === 3) {
    let radius = 150;
    drawHand(width / 2, height / 2, secondAngle, radius * 4 / 5, 5, 1);
    drawHand(width / 2, height / 2, minuteAngle, radius * 2 / 5, 5, 1.5);
    drawHand(width / 2, height / 2, hourAngle, radius / 5, 5, 2);
  }
}

function drawHand(x, y, angle, length, width, ratio) {
  push();
  translate(x, y);
  rotate(angle);
  rectMode(CENTER);
  let w = width / ratio; 
  let h = length;
  rect(0, -h / 2, w, h, 5);
  pop();
}

function keyPressed() {
  if (key === '1') {
    currentMode = 1;
  } else if (key === '2') {
    currentMode = 2;
  } else if (key === '3') {
    currentMode = 3;
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    region = input.value() === 'NY' ? 'NY' : 'CN'; 
    input.value(''); 
  }
}

function style01(timeString, dateString) {
  ellipse(width / 2, height / 2, 300, 300); 
  drawNumbers([12, 3, 6, 9], 30); 
  textSize(32);
  stroke(255, 0, 0);
  strokeWeight(3 / 2); 
  noFill(); 
  text(timeString, width / 2, height / 2); 
  textSize(24);
  strokeWeight(11 / 8); 
  text(dateString, width / 2, height / 2 + 40); 
}

function style02(timeString, dateString) {
  rect(width / 2 - 150, height / 2 - 150, 300, 300); 
  drawNumbers([12, 3, 6, 9], 30); 
  textSize(32); 
  stroke(255, 0, 0); 
  strokeWeight(3 / 2); 
  noFill(); 
  text(timeString, width / 2, height / 2); 
  textSize(24); 
  strokeWeight(11 / 8)
  text(dateString, width / 2, height / 2 + 40); 
}

function style03(timeString, dateString) {
  push();
  translate(0, -50);
  beginShape();
  vertex(width / 2, height / 2 - 150); 
  vertex(width / 2 - 150, height / 2 + 150); 
  vertex(width / 2 + 150, height / 2 + 150); 
  endShape(CLOSE); 
  pop();
  drawNumbers([12, 4, 8], 90); 
  textSize(32); 
  stroke(255, 0, 0); 
  strokeWeight(3 / 2); 
  noFill(); 
  text(timeString, width / 2, height / 2);
  textSize(24); 
  strokeWeight(11 / 8); 
  text(dateString, width / 2, height / 2 + 40); 
}

function drawNumbers(numbers, offset) {

  for (let i = 0; i < numbers.length; i++) {
    let angle;
    if (numbers[i] === 12) {
      angle = -PI / 2; 
    } else if (numbers[i] === 4) {
      angle = PI / 6; 
    } else if (numbers[i] === 8) {
      angle = PI - PI / 6;
    } else {
      angle = map(i * 3, 0, 12, 0, TWO_PI) - HALF_PI; 
    }
    
    let x = width / 2 + cos(angle) * (150 + offset); 
    let y = height / 2 + sin(angle) * (150 + offset);
    textSize(32);
    noFill();
    stroke(255, 0, 0); 
    strokeWeight(2); 
    text(numbers[i], x, y);
  }
}
