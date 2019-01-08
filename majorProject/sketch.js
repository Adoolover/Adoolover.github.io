// Top down raceing, game Major Project
// Cody Flynn
// Fri Dec 7th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class RaceCar {
  constructor() {
    this.x = 725;
    this.y = 675;
    this.dx = 0;
    this.dy = 0;
    this.size = 20;
    this.speed = 0;
    this.angle = 0.01;
    this.turnSpeed = 3;
  }

  displayCar(){
    push();
    translate(this.x,this.y);
    angleMode(DEGREES);
    rotate(this.angle);
    fill(0);
    rect(0,0, this.size, this.size);
    pop();

  }

  checkElement(aGrid) {
    let cX = ceil(this.x/cellsize);
    let cY = ceil(this.y/cellsize);

    let fX = floor(this.x/cellsize);
    let fY = floor(this.y/cellsize);

    // checking ceil
    if (aGrid[cY+1][cX] === "w") {
      this.y -= this.speed;
      this.speed = 0;
    }
    if (aGrid[cY-1][cX] === "w") {
      this.y += this.speed;
      this.speed = 0;
    }
    if (aGrid[cY][cX+1] === "w") {
      this.x -= this.speed;
      this.speed = 0;
    }
    if (aGrid[cY][cX-1] === "w") {
      this.x += this.speed;
      this.speed = 0;
    }
    
    //checking floor
    if (aGrid[fY+1][fX] === "w") {
      this.y -= this.speed;
      this.speed = 0;
    }
    if (aGrid[fY-1][fX] === "w") {
      this.y += this.speed;
      this.speed = 0;
    }
    if (aGrid[fY][fX+1] === "w") {
      this.x -= this.speed;
      this.speed = 0;
    }
    if (aGrid[fY][fX-1] === "w") {
      this.x += this.speed;
      this.speed = 0;
    }

  }

  carMovement() {
    this.dx = cos(this.angle) * this.speed;
    this.dy = sin(this.angle) * this.speed;

    this.x += this.dx;
    this.y += this.dy;
  }

  handleKeyPress() {
    // W
    if (keyIsDown(87)){
      this.speed += 0.1;
      if (this.speed > 8) {
        this.speed = 8;
      }
    }
    // S
    if (keyIsDown(83)){
      this.speed -= 0.1;
      if (this.speed < -2) {
        this.speed = -2;
      }
    }
    // D
    if (keyIsDown(68)){
      // this.y += this.dy;
      this.angle += this.turnSpeed;
    }
    // A
    if (keyIsDown(65)){
      // this.y -= this.dy;
      this.angle -= this.turnSpeed;
    }
    if (keyIsPressed === false){
      this.speed -= 0.1;
      this.speed = constrain(this.speed,0,8);
    }
  }

  displaySpeed() {
    text(int(this.speed*15) + "Km/h", width-100, height-50);
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
  rectMode(CENTER);
  cellsize = (width + height)*0.0075;
  rows = 45;//height/100*cellsize;
  cols = 90; //width/100*cellsize;
  playerCar = new RaceCar;
  noStroke();
  cleanUpTheGrid(grid);




}

function draw() {
  displayGrid(grid);


  playerCar.handleKeyPress();
  playerCar.carMovement();
  playerCar.checkElement(grid);
  playerCar.displayCar();
  playerCar.displaySpeed();

  displayLaps();
}


function cleanUpTheGrid(someGrid) {
  for (let i = 0; i < grid.length; i++) {
    someGrid[i] = someGrid[i].split("");
  }
}

function displayGrid(thisGrid) {
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      if (thisGrid[j][i] === "w"){
        fill("brown");
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }
      if (thisGrid[j][i] === "W"){
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
      else if (thisGrid[j][i] === "c" || thisGrid[j][i] === "f" ){
        fill("yellow");
        rect(i*cellsize, j*cellsize, cellsize+1, cellsize+1);
      }

    }
  }
}

function displayLaps() {
  fill(0);
  text("laps", width*0.95, height*0.05);
}
