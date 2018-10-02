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
let girdPeace;
function setup() {
  createCanvas(windowWidth, windowHeight);
  lineX1 = 140;
  lineX2 = 340;
  lineY1 = 30;
  lineY2 = 230;
  circY = height/2;
  circX = width/2;
  circleWidth = 200;
  girdPeace = 0;
  state = 1;
}

function draw() {
  strokeWeight(2);

  drawBoard();
  drawCircle();
  if (state === 1){
    drawX();
    state = 2;
  }
  else if (state === 2){
    drawCircle();
    state = 1;
  }
}
function mousePressed(){
  findGrid();
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

function drawBoard(){
  line(width*0.33,0,width*0.33,height);
  line(width*0.66,0,width*0.66,height);
  line(0,height*0.33,width, height*0.33);
  line(0,height*0.66,width,height*0.66);
}





function drawCircle(){
  fill(0);
  ellipse(circX,circY,circleWidth);
}

function drawX(){
  if (girdPeace === 1){
    strokeWeight(10);
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
  }
  if (girdPeace === 2){
    strokeWeight(10);
    lineX1 += width*0.33;
    lineX2 += width*0.33;
    for(let i = 0; i < 2; i++){
      line(lineX1,lineY1,lineX2,lineY2);
      lineX1 += 200;
      lineX2 -= 200;
    }
    lineX1 = 140;
    lineX2 = 340;
  }
  if (girdPeace === 3){
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
  }
  if (girdPeace === 4){
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
  }
  if (girdPeace === 5){
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
  }
  if (girdPeace === 6){
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
  }
  if (girdPeace === 7){
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
  }
  if (girdPeace === 8){
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
  }
  if (girdPeace === 9){
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
  }
}
