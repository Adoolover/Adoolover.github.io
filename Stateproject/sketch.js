// Tic Tac Toe
// Cody Flynn
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawX();
  drawCircle();
}

function drawX(){
  line(10,10,60,60);
  line(60,10,10,60);
}
function drawCircle(){
  ellipse(50,50,50);
}
