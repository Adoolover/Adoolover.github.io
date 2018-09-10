// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectwidth:

function setup() {
  createCanvas(windowWidth, windowHeight);
x = width/2;
dx = 5;
rectwidth = 50;
}

function draw() {
  background(255, 0, 0)
// move rectangle
x += dx;


// check if you hit wall
if (x > width - rectwidth || x < 0) {
  dx = dx * -1;
  }
  // display rectangle
  fill(0, 255, 0);
rect(x, 400 ,rectwidth ,150,);
}
