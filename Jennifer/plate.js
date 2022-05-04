let balls = [];

function setup() {
  createCanvas(600, 600);
  background(50);
}

function draw() {
  background(255, 240, 245,10);
  
  let b = new Ball(width/2,height/2, random(10, 50));
  balls.push(b);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i]; 
    b.move();
    b.speedUp();
    b.display();
  }
}

class Ball {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-5, 5);
    this.dia = d;
    this.r = random(240);
    this.g = 0;
    this.b = 0;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  slowDown() {
    this.ySpd = this.ySpd * 0.8; 
  }
  speedUp() {
    this.xSpd = this.xSpd * 1.02; 
    this.ySpd = this.ySpd * 1.02; 
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}
