// Tic Tac Toe
// Cody Flynn
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridPeaceTaken =
["a", "b", "c",
  "d", "e", "f",
  "g", "h", "i"];
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
  winXAxis();
  winYAxis();
  winDiaganol();

}
//------------------------------------------------------------------------------
// Determining The Winner
function winDiaganol(){
  if (gridPeaceTaken[0] === gridPeaceTaken[4] && gridPeaceTaken[0] === gridPeaceTaken[8]) {
    if (gridPeaceTaken[0] === "x"){
      fill(255);
      textSize(25);
      text("You Win X Good Job",width/2,height/2);
    }
    if (gridPeaceTaken[0] === "o"){
      fill(255);
      textSize(25);
      text("You Win O Good Job",width/2,height/2);
    }
  }
  else if (gridPeaceTaken[2] === gridPeaceTaken[4] && gridPeaceTaken[2] === gridPeaceTaken[6]) {
    if (gridPeaceTaken[2] === "x"){
      fill(255);
      textSize(25);
      text("You Win X Good Job",width/2,height/2);
    }
    if (gridPeaceTaken[2] === "o"){
      fill(255);
      textSize(25);
      text("You Win O Good Job",width/2,height/2);
    }
  }
}
function winXAxis(){
  for (let i = 0; i < gridPeaceTaken.length - 1; i += 3){
    if (gridPeaceTaken[i] === gridPeaceTaken[i+1] && gridPeaceTaken[i] === gridPeaceTaken[i+2]) {
      if (gridPeaceTaken[i] === "x"){
        fill(255);
        textSize(25);
        text("You Win X Good Job",width/2,height/2);
      }
      if (gridPeaceTaken[i] === "o"){
        fill(255);
        textSize(25);
        text("You Win O Good Job",width/2,height/2);
      }
    }
  }
}
function winYAxis(){
  for (let i = 0; i <= 3; i++){
    if (gridPeaceTaken[i] === gridPeaceTaken[i+3] && gridPeaceTaken[i] === gridPeaceTaken[i+6]) {
      if (gridPeaceTaken[i] === "x"){
        fill(255);
        textSize(25);
        text("You Win X Good Job",width/2,height/2);
      }
      if (gridPeaceTaken[i] === "o"){
        fill(255);
        textSize(25);
        text("You Win O Good Job",width/2,height/2);
      }
    }
  }
}
//------------------------------------------------------------------------------
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
    gridPeaceTaken[girdPeace - 1] = "o";
    gridPeaceTaken1 = true;
    state = 1;
  }
  if (girdPeace === 2 && gridPeaceTaken2 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX*3,circY,circleWidth);
    gridPeaceTaken2 = true;
    state = 1;
  }
  if (girdPeace === 3 && gridPeaceTaken3 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX*5.1,circY,circleWidth);
    gridPeaceTaken3 = true;
    state = 1;
  }
  if (girdPeace === 4 && gridPeaceTaken4 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX,circY*3,circleWidth);
    gridPeaceTaken4 = true;
    state = 1;
  }
  if (girdPeace === 5 && gridPeaceTaken5 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX*3,circY*3,circleWidth);
    gridPeaceTaken5 = true;
    state = 1;
  }
  if (girdPeace === 6 && gridPeaceTaken6 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX* 5.1,circY*3,circleWidth);
    gridPeaceTaken6 = true;
    state = 1;
  }
  if (girdPeace === 7 && gridPeaceTaken7 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX,circY*5.1,circleWidth);
    gridPeaceTaken7 = true;
    state = 1;
  }
  if (girdPeace === 8 && gridPeaceTaken8 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX*3,circY*5.1,circleWidth);
    gridPeaceTaken8 = true;
    state = 1;
  }
  if (girdPeace === 9 && gridPeaceTaken9 === false){
    gridPeaceTaken[girdPeace - 1] = "o";
    ellipse(circX*5.1,circY*5.1,circleWidth);
    gridPeaceTaken9 = true;
    state = 1;
  }
}
// drawing the x
function drawX(X1mod, X2mod, Y1mod, Y2mod){
  strokeWeight(10);
  for(let i = 0; i < 2; i++){
    line(lineX1+X1mod, lineY1+Y1mod, lineX2+X2mod, lineY2+Y2mod);
    lineX1 += 200;
    lineX2 -= 200;
  }
  lineX1 = 140;
  lineX2 = 340;
}
// placing X in the correct Grid
function placeX(){
  if (girdPeace === 1 && gridPeaceTaken1 === false){
    drawX(1,1,1,1);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken1 = true;
    state = 2;
  }
  if (girdPeace === 2 && gridPeaceTaken2 === false){
    drawX(width*0.33,width*0.33,1,1);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken2 = true;
    state = 2;
  }
  if (girdPeace === 3 && gridPeaceTaken3 === false){
    drawX(width*0.66,width*0.66,1,1);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken3 = true;
    state = 2;
  }
  if (girdPeace === 4 && gridPeaceTaken4 === false){
    drawX(1, 1, height*0.33, height*0.33);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken4 = true;
    state = 2;
  }
  if (girdPeace === 5 && gridPeaceTaken5 === false){
    drawX(width*0.33, width*0.33, height*0.33, height*0.33);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken5 = true;
    state = 2;
  }
  if (girdPeace === 6 && gridPeaceTaken6 === false){
    drawX(width*0.66, width*0.66, height*0.33, height*0.33);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken6 = true;
    state = 2;
  }
  if (girdPeace === 7 && gridPeaceTaken7 === false){
    drawX(1, 1, height*0.66, height*0.66);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken7 = true;
    state = 2;
  }
  if (girdPeace === 8 && gridPeaceTaken8 === false){
    drawX(width*0.33, width*0.33, height*0.66, height*0.66);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken8 = true;
    state = 2;
  }
  if (girdPeace === 9 && gridPeaceTaken9 === false){
    drawX(width*0.66, width*0.66, height*0.66, height*0.66);
    gridPeaceTaken[girdPeace - 1] = "x";
    gridPeaceTaken9 = true;
    state = 2;
  }
}
