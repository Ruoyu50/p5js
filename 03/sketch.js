let modeA = false; 
let modeB = false;
let x = 50;
let y = 50;

function setup() {
  createCanvas(400, 400);
  background(127.5);
}

function draw() {
  if (modeA) {
    GroupA();
  } else if (modeB) {
    GroupB();
  }
}


function GroupA() {
  if (mouseX < width / 2 && mouseY < height / 2) {
    background(255, 0, 0); 
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    background(0, 255, 0); 
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    background(0, 0, 255); 
  } else {
    background(0); 
  }
}


function GroupB() {
  if (mouseX < width / 2 && mouseY < height / 2) {
    background(255, 255, 0); 
  } else if (mouseX >= width / 2 && mouseY < height / 2) {
    background(255, 0, 255); 
  } else if (mouseX < width / 2 && mouseY >= height / 2) {
    background(0, 255, 255); 
  } else {
    background(255); 
  }
}

function keyPressed() {
  if (key === 'a') {
    modeA = true;  
    modeB = false; 
  } else if (key === 'b') {
    modeB = true;  
    modeA = false;  
  }
}

function mousePressed() {
  modeA = false;
  modeB = false;
  background(127.5);
}