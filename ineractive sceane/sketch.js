// Ineractive_scene
// Cody Flynn
// sept 13th
// Falling Blocks game.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// 1548 is the end of the screen on the right
// 742 aprox end of screen

let hit = true;
// square varibals
let squareX = 0;
let squareY = 0;
let squareYG2 = -150;
let squareYG3 = -300;
let squareYG4 = -450;
let squareYG5 = -600;
let squareWidth = 50;
let squareHeight = 50;
// circle varibals
let circlewidth = 50;
let ballX;
let ballY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width/2;
  ballY = height/2;

}

function draw(){
  background(0);
  fill(255, 0, 255);
  // creating the squares and player ball
  // group one
  rect(squareX, squareY, squareWidth, squareHeight);
  rect(squareX + 200 , squareY, squareWidth, squareHeight);
  rect(squareX + 400 , squareY, squareWidth, squareHeight);
  rect(squareX + 600 , squareY, squareWidth, squareHeight);
  rect(squareX + 800 , squareY, squareWidth, squareHeight);
  rect(squareX + 1000, squareY, squareWidth, squareHeight);
  rect(squareX + 1200, squareY, squareWidth, squareHeight);
  rect(squareX + 1400, squareY, squareWidth, squareHeight);
  rect(squareX + 1600, squareY, squareWidth, squareHeight);
  // group two
  rect(squareX + 1500, squareYG2, squareWidth, squareHeight);
  rect(squareX + 1300, squareYG2, squareWidth, squareHeight);
  rect(squareX + 1100, squareYG2, squareWidth, squareHeight);
  rect(squareX + 900 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 700 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 500 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 300 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 100 , squareYG2, squareWidth, squareHeight);
  // group 3
  rect(squareX, squareYG3, squareWidth, squareHeight);
  rect(squareX + 200 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 400 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 600 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 800 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 1000, squareYG3, squareWidth, squareHeight);
  rect(squareX + 1200, squareYG3, squareWidth, squareHeight);
  rect(squareX + 1400, squareYG3, squareWidth, squareHeight);
  rect(squareX + 1600, squareYG3, squareWidth, squareHeight);
  // group 4
  rect(squareX + 1500, squareYG4, squareWidth, squareHeight);
  rect(squareX + 1300, squareYG4, squareWidth, squareHeight);
  rect(squareX + 1100, squareYG4, squareWidth, squareHeight);
  rect(squareX + 900 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 700 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 500 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 300 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 100 , squareYG4, squareWidth, squareHeight);
  // group 5
  rect(squareX, squareYG5, squareWidth, squareHeight);
  rect(squareX + 200 , squareYG5, squareWidth, squareHeight);
  rect(squareX + 400 , squareYG5, squareWidth, squareHeight);
  rect(squareX + 600 , squareYG5, squareWidth, squareHeight);
  rect(squareX + 800 , squareYG5, squareWidth, squareHeight);
  rect(squareX + 1000, squareYG5, squareWidth, squareHeight);
  rect(squareX + 1200, squareYG5, squareWidth, squareHeight);
  rect(squareX + 1400, squareYG5, squareWidth, squareHeight);
  rect(squareX + 1600, squareYG5, squareWidth, squareHeight);
  // player ball
  ellipse(ballX, ballY, circlewidth);
  if (mouseIsPressed){
    hit = false;
  }
  if (hit === false){
  // square movement
    squareY++;
    squareYG2++;
    squareYG3++;
    squareYG4++;
    squareYG5++;
    // reseting the squares
    if (squareY >= windowHeight){
      squareY = 0;
    }
    if (squareYG2 >= windowHeight){
      squareYG2 = 0;
    }
    if (squareYG3 >= windowHeight){
      squareYG3 = 0;
    }
    if (squareYG4 >= windowHeight){
      squareYG4 = 0;
    }
    if (squareYG5 >= windowHeight){
      squareYG5 = 0;
    }
    // colision detection
    if (ballX === squareX && ballY === squareY){
      hit = true;
    }
    // in window
    if (ballX - circlewidth/2 <= 0){
      ballX += circlewidth/2;
    }
    if (ballX + circlewidth/2 >= width){
      ballX -= circlewidth/2;
    }
    if (ballY + circlewidth/2 <= 0){
      ballY += circlewidth/2;
    }
    if (ballY - circlewidth/2 >= height){
      ballY -= circlewidth/2;
    }
    // movement of the player ball
    if (keyIsDown(87)|| keyIsDown(38)){
      ballY = ballY-2;
    }
    if (keyIsDown(83)|| keyIsDown(40)){
      ballY = ballY+2;
    }
    if (keyIsDown(65)|| keyIsDown(37)){
      ballX = ballX-2;
    }
    if (keyIsDown(68)|| keyIsDown(39)){
      ballX = ballX+2;
    }
    // detect collision
    if (ballX - circlewidth*0.5 <= squareX + squareWidth && ballX - circlewidth*0.5 >= squareX){
      if (ballY - circlewidth*0.5 <= squareY + squareHeight && ballY + circlewidth*0.5 >= squareY){
        hit = true;
      }
    }

  }
}
