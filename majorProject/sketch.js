// Top down raceing, game Major Project
// Cody Flynn
// Fri Dec 7th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class RaceCar {
  constructor() {
    this.x = 400;
    this.y = 400;
    this.dx = 2;
    this.dy = 2;
    this.size = 20;
    this.maxSpeed;
    this.rotation = 0;
  }

  displayCar(){
    fill(0);

    push();
    translate(this.x,this.y);
    rotate(this.rotation);
    rect(0,0, this.size, this.size);
    this.x = cos(this.rotation*this.dx);
    // this.y = sin(this.rotation*this.dy);
    pop();

  }

  carMovement(){
    // W
    if (keyIsDown(87)){
      this.x += this.dx;
    }
    // S
    if (keyIsDown(83)){
      this.x -= this.dx;
    }
    // D
    if (keyIsDown(68)){
      // this.y += this.dy;
      this.rotation -= 1;
    }
    // A
    if (keyIsDown(65)){
      // this.y -= this.dy;
      this.rotation += 1;
    }
  }
}

let grid;
let cols;
let rows;
let cellsize;
let playerCar;
let track1;

function preload(){
  grid = loadStrings("assets/trackOne.txt");
  track1 = loadImage("assets/trackOne.PNG");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  cellsize = (width + height)*0.0075;
  rows = 44;//height/100*cellsize;
  cols = 90; //width/100*cellsize;
  playerCar = new RaceCar;
  noStroke();
  cleanUpTheGrid(grid);



}

function draw() {
//  displayGrid(grid);
  image(track1, 0,0);
  playerCar.displayCar();
  playerCar.carMovement();
}


function cleanUpTheGrid(someGrid) {
  for (let i = 0; i < grid.length; i++) {
    someGrid[i] = someGrid[i].split("");
  }
}

function displayGrid(thisGrid){
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      if (thisGrid[j][i] === "w"){
        fill("brown");
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }
      else if (thisGrid[j][i] === "g"){
        fill(0,255,0);
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }
      else if (thisGrid[j][i] === "t"){
        fill(125);
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }

    }
  }
}

// function creating2DGrid() {
//   let arr = [];
//   for (let y = 0; y < rows; y++) {
//     arr.push([]);
//     for (let x = 0; x < cols; x++) {
//       arr[y].push(0);
//     }
//   }
//   return arr;
// }
