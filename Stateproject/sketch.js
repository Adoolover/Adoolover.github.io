// Tic Tac Toe
// Cody Flynn
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridPeaceTaken1 = false;
let gridPeaceTaken2 = false;
let gridPeaceTaken3 = false;
let gridPeaceTaken4 = false;
let gridPeaceTaken5 = false;
let gridPeaceTaken6 = false;
let gridPeaceTaken7 = false;
let gridPeaceTaken8 = false;
let gridPeaceTaken9 = false;
let state;
let lineX1, lineX2;
let lineY1, lineY2;
let circleWidth;
let circY, circX;
let girdPeace;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,150);
  lineX1 = 140;
  lineX2 = 340;
  lineY1 = 30;
  lineY2 = 230;
  circleWidth = 200;
  circY = height*0.16;
  circX = width*0.16;
  girdPeace = 0;
  state = 1;
}

function draw() {
  strokeWeight(2);
  drawBoard();
}
// finding grid peace and  drawing shape
function mousePressed(){
  findGrid();
  if (state === 1){
    placeX();
  }

  else if (state === 2){
    drawCircle();
  }
}
// finding Square
function findGrid(){

  if (mouseX < width*0.33 && mouseY < height*0.33){
    girdPeace = 1;
  }
  else if (mouseX < width*0.66 && mouseX > width*0.33 && mouseY < height*0.33){
    girdPeace = 2;
  }
  else if (mouseX > width*0.66 && mouseY < height*0.33){
    girdPeace = 3;
  }
  else if (mouseX < width*0.33 && mouseY > height*0.33 && mouseY < height*0.66){
    girdPeace = 4;
  }
  else if (mouseX > width*0.33 && mouseX < width*0.66 && mouseY > height*0.33 && mouseY < height*0.66){
    girdPeace = 5;
  }
  else if (mouseX > width*0.66 && mouseY > height*0.33 && mouseY < height*0.66){
    girdPeace = 6;
  }
  else if (mouseX < width*0.33 && mouseY > height*0.66){
    girdPeace = 7;
  }
  else if (mouseX > width*0.33 && mouseX< width*0.66 && mouseY > height*0.66){
    girdPeace = 8;
  }
  else if (mouseX > width*0.66 && mouseY > height*0.66){
    girdPeace = 9;
  }
}
// drawing board
function drawBoard(){
  line(width*0.33,0,width*0.33,height);
  line(width*0.66,0,width*0.66,height);
  line(0,height*0.33,width, height*0.33);
  line(0,height*0.66,width,height*0.66);
}
// drawing the cirlce
function drawCircle(){
  fill(0);
  if (girdPeace === 1 && gridPeaceTaken1 === false ){
    ellipse(circX,circY,circleWidth);
    gridPeaceTaken1 = true;
    state = 1;
  }
  if (girdPeace === 2 && gridPeaceTaken2 === false){
    ellipse(circX*3,circY,circleWidth);
    gridPeaceTaken2 = true;
    state = 1;
  }
  if (girdPeace === 3 && gridPeaceTaken3 === false){
    ellipse(circX*5.1,circY,circleWidth);
    gridPeaceTaken3 = true;
    state = 1;
  }
  if (girdPeace === 4 && gridPeaceTaken4 === false){
    ellipse(circX,circY*3,circleWidth);
    gridPeaceTaken4 = true;
    state = 1;
  }
  if (girdPeace === 5 && gridPeaceTaken5 === false){
    ellipse(circX*3,circY*3,circleWidth);
    gridPeaceTaken5 = true;
    state = 1;
  }
  if (girdPeace === 6 && gridPeaceTaken6 === false){
    ellipse(circX* 5.1,circY*3,circleWidth);
    gridPeaceTaken6 = true;
    state = 1;
  }
  if (girdPeace === 7 && gridPeaceTaken7 === false){
    ellipse(circX,circY*5.1,circleWidth);
    gridPeaceTaken7 = true;
    state = 1;
  }
  if (girdPeace === 8 && gridPeaceTaken8 === false){
    ellipse(circX*3,circY*5.1,circleWidth);
    gridPeaceTaken8 = true;
    state = 1;
  }
  if (girdPeace === 9 && gridPeaceTaken9 === false){
    ellipse(circX*5.1,circY*5.1,circleWidth);
    gridPeaceTaken9 = true;
    state = 1;
  }
}
// drawing the x
function drawX(X1mod, X2mod, Y1mod, Y2mod){
  strokeWeight(10);
  for(let i = 0; i < 2; i++){
    line(lineX1*X1mod,lineY1*Y1mod,lineX2*X2mod,lineY2*Y2mod);
    lineX1 += 200;
    lineX2 -= 200;
  }
  lineX1 = 140;
  lineX2 = 340;
}

function placeX(){
  if (girdPeace === 1 && gridPeaceTaken1 === false){
    drawX(1,1,1,1);
    gridPeaceTaken1 = true;
    state = 2;
  }
  if (girdPeace === 2 && gridPeaceTaken2 === false){
    drawX(width*0.33,width*0.33,1,1);
    gridPeaceTaken2 = true;
    state = 2;
  }
  if (girdPeace === 3 && gridPeaceTaken3 === false){
    strokeWeight(10);
    lineX1 += width*0.66;
    lineX2 += width*0.66;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    gridPeaceTaken3 = true;
    state = 2;
  }
  if (girdPeace === 4 && gridPeaceTaken4 === false){
    strokeWeight(10);
    lineY1 += height*0.33;
    lineY2 += height*0.33;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken4 = true;
    state = 2;
  }
  if (girdPeace === 5 && gridPeaceTaken5 === false){
    strokeWeight(10);
    lineX1 += width*0.33;
    lineX2 += width*0.33;
    lineY1 += height*0.33;
    lineY2 += height*0.33;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken5 = true;
    state = 2;
  }
  if (girdPeace === 6 && gridPeaceTaken6 === false){
    strokeWeight(10);
    lineX1 += width*0.66;
    lineX2 += width*0.66;
    lineY1 += height*0.33;
    lineY2 += height*0.33;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken6 = true;
    state = 2;
  }
  if (girdPeace === 7 && gridPeaceTaken7 === false){
    strokeWeight(10);
    lineY1 += height*0.66;
    lineY2 += height*0.66;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken7 = true;
    state = 2;
  }
  if (girdPeace === 8 && gridPeaceTaken8 === false){
    strokeWeight(10);
    lineX1 += width*0.33;
    lineX2 += width*0.33;
    lineY1 += height*0.66;
    lineY2 += height*0.66;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken8 = true;
    state = 2;
  }
  if (girdPeace === 9 && gridPeaceTaken9 === false){
    strokeWeight(10);
    lineX1 += width*0.66;
    lineX2 += width*0.66;
    lineY1 += height*0.66;
    lineY2 += height*0.66;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
    lineY1 = 30;
    lineY2 = 230;
    gridPeaceTaken9 = true;
    state = 2;
  }
}
