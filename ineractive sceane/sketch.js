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
let squareWidth = 50
let squareHeight = 50

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

  rect(squareX + 1500 , squareY -150, squareWidth, squareHeight);
  rect(squareX + 1300 , squareY -150, squareWidth, squareHeight);
  rect(squareX + 1100 , squareY -150, squareWidth, squareHeight);
  rect(squareX + 900 , squareY - 150, squareWidth, squareHeight);
  rect(squareX + 700 , squareY - 150, squareWidth, squareHeight);
  rect(squareX + 500 , squareY - 150, squareWidth, squareHeight);
  rect(squareX + 300 , squareY - 150, squareWidth, squareHeight);
  rect(squareX + 100 , squareY - 150, squareWidth, squareHeight);

  rect(squareX, squareY - 300, squareWidth, squareHeight);
  rect(squareX + 200 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 400 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 600 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 800 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 1000 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 1200 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 1400 , squareY - 300, squareWidth, squareHeight);
  rect(squareX + 1600 , squareY - 300, squareWidth, squareHeight);

  squareY++
}
