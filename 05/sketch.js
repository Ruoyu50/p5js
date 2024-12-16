let angles = [0, 0, 0];
let c = [0.02, 0.01, 0.03];
let n = [10, 25, 40];
let sliders = [];
let amplitudeSlider;
let frequencySlider;

function setup() {
  createCanvas(800, 800);
  noFill();
  
  for (let i = 0; i < 3; i++) {
    sliders[i] = createSlider(i === 0 ? 1 : 16, (i + 1) * 15, (i + 1) * 10); 
    sliders[i].position(25, 80+i * 20);
    sliders[i].size(750);
  }

  // Amplitude slider
  amplitudeSlider = createSlider(1, 1000, 5);
  amplitudeSlider.position(40, 145);
  amplitudeSlider.size(735);

  // Frequency slider
  frequencySlider = createSlider(1, 1000, 5);
  frequencySlider.position(30, 170);
  frequencySlider.size(745);
}

function draw() {
  clear();

  // Draw labels for sliders 'n'
  for (let i = 0; i < 3; i++) {
    push();
    textSize(20);
    fill(0);
    noStroke();
    text('n' + String.fromCharCode(65 + i), 0, (i + 1) * 20);
    pop();
  }

  // Amplitude label
  push();
  textSize(20);
  fill(0);
  noStroke();
  text('Amp', 0, 80);
  pop();
  
  // Frequency label
  push();
  textSize(20);
  fill(0);
  noStroke();
  text('Fre', 0, 105);
  pop();

  translate(width / 2, height / 2);
  
  // Update 'n' values from sliders and draw lines
  for (let i = 0; i < 3; i++) {
    n[i] = sliders[i].value();
    layoutLines(i);
  }
}

function drawLine(index) {
  let amplitude = amplitudeSlider.value();
  let frequency = map(frequencySlider.value(), 1, 1000, 0.001, 1);
  let length = [250, 200, 150][index];

  stroke([0, 0, 255][index], [255, 0, 0][index], [0, 255, 255][index]);
  strokeWeight(0.25 + 0.25 * index);
  
  beginShape();
  for (let x = (index + 1) * 5; x <= length; x += 1) {
    let y = amplitude * sin(TWO_PI * frequency * x + angles[index]);
    vertex(x, y);
    
    if (x % (index === 0 ? 50 : 10.5) === 0) {
      push();
      if (index === 0) {
        stroke(255, 127, 0);
        strokeWeight(10);
        arc(x, y, 5, 10, -PI / 2, PI / 2);
      } else if (index === 1) {
        fill(0, 127, 255);
        noStroke();
        rectMode(CENTER);
        rect(x, y, 5, 5);
      } else {
        fill(127, 255, 0);
        noStroke();
        ellipse(x, y, 5, 5);
      }
      pop();
    }
  }
  endShape();

  angles[index] += c[index] / n[index];
}

function layoutLines(index) {  
  for (let k = 0; k < n[index]; k++) {
    push();
    rotate((2 * PI / n[index]) * k);
    drawLine(index);
    pop();
  }
}