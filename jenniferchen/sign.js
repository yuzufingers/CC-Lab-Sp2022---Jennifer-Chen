let r,g,b; 

function setup() {
 let canvas = createCanvas(450, 450);
 canvas.parent("p5-canvas-container");
   background(255);
  instructions();
}

function draw() { 
  let r = 0
  let g = map(mouseX, 0, width, 128, 255);
  let b = map(mouseY, 0, height, 240, 128);
  
  if (mouseIsPressed) {
    strokeWeight(2);
    stroke(r,g,b);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
   if (keyIsPressed && key == " ") {
    background(255);
    noStroke();
    instructions();
  }
}

function instructions() {
  textSize(18);
  fill(0,0,0);
  textFont('Nunito');
  text("Welcome to Yuzufingers", 10, 25);
  text("YuzuFingers is our shared domestic space.", 10, 60);
  text("Come eat with us.", 10, 95)
  text("Sign in here", 10, 130)
  textSize(8);
  text("(or leave us a drawing)", 112,130)
  textSize(10);
  text("Press spacebar to clear.", 10, 430)
}
