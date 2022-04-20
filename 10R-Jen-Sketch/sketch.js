function setup() {
  let cvs = createCanvas(600, 600);
  cvs.parent("my-brush");
  background(255, 255, 255);

  let gridSize = 50;
  for (let y = 0; y <= height; y += 9) {
    for (let x = 0; x <= width; x += gridSize) {
      push();
      translate(x, y);
      scale(random(0.7, 1.2));
      let r = map(x, 0, width, 0, 255);
      let alpha = map(y, 0, height, 220, 100);
      noStroke();
      fill(r, 0, 0, alpha);
      ellipse(0, 0, gridSize, y);
      pop();
    }
  }
}

function draw() {
  noLoop();
}
