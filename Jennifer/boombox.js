let Ding; 

function preload(){
  Ding = loadSound("assets/Ding.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text("Click here to listen", 200,200);
}

function mousePressed(){
  Ding.play();
}
