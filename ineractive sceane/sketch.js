// Ineractive_scene
// Cody Flynn
// sept 13th
// Falling Blocks game.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// 1548 is the end of the screen on the right
// 742 aprox end of screen

let squareX = 0;
let squareY = 0;
let squareYG2 = -150;
let squareYG3 = -300;
let squareYG4 = -450
let squareWidth = 50;
let squareHeight = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(255);

  rect(squareX, squareY, squareWidth, squareHeight);
  rect(squareX + 200 , squareY, squareWidth, squareHeight);
  rect(squareX + 400 , squareY, squareWidth, squareHeight);
  rect(squareX + 600 , squareY, squareWidth, squareHeight);
  rect(squareX + 800 , squareY, squareWidth, squareHeight);
  rect(squareX + 1000 , squareY, squareWidth, squareHeight);
  rect(squareX + 1200 , squareY, squareWidth, squareHeight);
  rect(squareX + 1400 , squareY, squareWidth, squareHeight);
  rect(squareX + 1600 , squareY, squareWidth, squareHeight);

  rect(squareX + 1500 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 1300 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 1100 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 900 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 700 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 500 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 300 , squareYG2, squareWidth, squareHeight);
  rect(squareX + 100 , squareYG2, squareWidth, squareHeight);

  rect(squareX, squareYG3, squareWidth, squareHeight);
  rect(squareX + 200 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 400 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 600 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 800 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 1000 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 1200 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 1400 , squareYG3, squareWidth, squareHeight);
  rect(squareX + 1600 , squareYG3, squareWidth, squareHeight);

  rect(squareX + 1500 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 1300 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 1100 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 900 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 700 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 500 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 300 , squareYG4, squareWidth, squareHeight);
  rect(squareX + 100 , squareYG4, squareWidth, squareHeight);

  squareY++;
  squareYG2++;
  squareYG3++;
  if (squareY >= windowHeight){
    squareY = 0;
  }
  if (squareYG2 >= windowHeight){
    squareYG2 = 0;
  }
  if (squareYG3 >= windowHeight){
    squareYG3 = 0;
  }

}
