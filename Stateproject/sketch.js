// Tic Tac Toe
// Cody Flynn
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let lineX1, lineX2;
let lineY1, lineY2;
let circleWidth;
let circY, circX;
function setup() {
  createCanvas(windowWidth, windowHeight);
  lineX1 = 10;
  lineX2 = 60;
  lineY1 = 10;
  lineY2 = 60;
  circY = 50;
  circX = 50;
  circleWidth = 50;
}

function draw() {
  drawBoard();
  drawCircle();
}
function drawBoard(){
  line(width*0.25,0,width/4,height);
  line(widht*0.75,y1,x2,y2);
  line(x1,y1,x2,y2);
  line(x1,y1,x2,y2);
}
function mousePressed(){
  drawX();
}
function drawX(){
  for(let i = 0; i < 2; i++){
    line(lineX1,lineY1,lineX2,lineY2);
    lineX1 += 50;
    lineX2 -= 50;
  }
  lineX1 = 10;
  lineX2 = 60;
}

function drawCircle(){
  ellipse(circX,circY,circleWidth);
}
