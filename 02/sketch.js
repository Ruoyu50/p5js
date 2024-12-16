let currentMode = 1

function setup() {
  createCanvas(640, 640);
  background(0);
}

function draw() {
   
  if (currentMode === 1) {
    conditionGroupA1()
  } else if (currentMode === 2) {
    conditionGroupB2()
  }
}
  
  function conditionGroupA1(){
  // Face
    // color
    
    // shape
    let faceWidth = map(mouseX, 0, windowWidth, 64, 640)
    let faceHeight = map(mouseY, 0, windowHeight, 64, 640)
    
  // Eyes
    // color

    // shape
     let eyeX = faceWidth / 5
     let LeyeSizeM = random(0, faceWidth / 5)
     let ReyeSizeM = random(0, faceWidth / 5)
     
     if (faceHeight <= faceWidth / 5) {
       faceHeight = faceWidth / 5
     }
     if (faceWidth <= faceWidth / 5) {
       faceWidth = faceWidth / 5
     }
    
     background(0);
    
     translate(width/2, height/2)
  
     //face
     fill(255);
     rectMode(CENTER);
     rect(0, 0, faceWidth, faceHeight, 50);
  
    //Leye
     fill(0);
     ellipse( eyeX, 0, LeyeSizeM);
     
     //Reye
     fill(0);
     ellipse( -eyeX, 0, ReyeSizeM);
    
    resetMatrix()
    }

    function conditionGroupB2(){
  // Face
    // color
    
    // shape
    let faceWidth = map(mouseX, 0, width, 64, 640)
    let faceHeight = map(mouseY, 0, height, 64, 640)
    
  // Eyes
    // color

    // shape
     let eyeX = faceWidth / 5
     let LeyeSizeM = random(0, faceWidth / 5)
     let ReyeSizeM = random(0, faceWidth / 5)
     
     if (faceHeight <= faceWidth / 5) {
       faceHeight = faceWidth / 5
     }
     if (faceWidth <= faceWidth / 5) {
       faceWidth = faceWidth / 5
     }
    
     background(0);
    
     translate(width/2, height/2)
  
     //face
     fill(255);
     ellipse(0, 0, faceWidth, faceHeight);
  
    //Leye
     fill(0);
     ellipse( eyeX, 0, LeyeSizeM);
     
     //Reye
     fill(0);
     ellipse( -eyeX, 0, ReyeSizeM);
      
     resetMatrix()
    }
  
function keyPressed() {
  if (key === 'a') {
    currentMode = 1;
  } else if (key === 'b') {
    currentMode = 2;
  }
}
  
//     //light1
//     fill( , , );
//     ellipse( , , );
  
//     //light2
//     fill( , , );
//     ellipse( , , );
  
//     //mouth
//     stroke( , , );
//     strokeWeight();
//     fill( , , );
//     arc( , , , , ,)
  
  
