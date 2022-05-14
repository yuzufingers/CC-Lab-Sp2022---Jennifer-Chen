let balls = [];

function setup() {
  let canvas = createCanvas(285, 285);
  canvas.parent("p5-canvas-container");
  background(50);
}

function draw() {
  background(255, 50);

  noStroke();
  fill(255, 50);
  circle(width / 2, height / 2, 230);

  let b = new Ball(width / 2, height / 2, random(10, 50));
  balls.push(b);

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();
    b.checkDistance();
  }
}

class Ball {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-5, 5);
    this.dia = d;
    this.r = random(128, 255);
    this.g = random(128, 240);
    this.b = random(128, 230);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  checkDistance() {
    let centerX = width / 2;
    let centerY = height / 2;
    let distance = dist(centerX, centerY, this.x, this.y);
    if (distance > 115) {
      this.xSpd = this.xSpd * random(-.6, -.8);
      this.ySpd = this.ySpd * random(-.6, -.8);
    }
  }
  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.dia);
    pop();
  }
}
