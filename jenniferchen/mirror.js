let cam;

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(0);


cam = createCapture(VIDEO);
cam.hide();

}

function draw() {
  background(0);

  let gridSize = 5;
  cam.loadPixels();
  noFill();
stroke(random(255,0,0));
  for (let y = 0; y < cam.height; y += gridSize ){
    beginShape();
    for (let x = 0; x < cam.width; x += gridSize ){
      let index  = (x + cam.width *y )* 4; 
      let r = cam.pixels[index + 0]; 
      let g = cam.pixels[index + 1]; 
      let b = cam.pixels[index + 2]; 

      let avg = (r + g + b) / 3;

      let yAdj = round(map(avg, 0 , 255, 30 , -30));
      vertex(x, y + yAdj);

      // cam.pixels[index + 0] = r * .5; 
      // cam.pixels[index + 0] = g * 1.0; 
      // cam.pixels[index + 0] = b * .2; 
    }
    endShape();
  }


  // cam.updatePixels();
  // image (cam, 0 ,0);
}
