// Top down raceing game, Major Project
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
    this.lap = 1;
    this.check = 0;
    this.time;
    this.timeStart = false;
    this.finish = false;
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

    // checking wall
    if (aGrid[cY][cX] === "w") {
      this.y -= this.speed;
      this.speed = 0;
    }
    if (aGrid[cY-1][cX] === "w") {
      this.y += this.speed;
      this.speed = 0;
    }
    if (aGrid[cY][cX] === "w") {
      this.x -= this.speed;
      this.speed = 0;
    }
    if (aGrid[cY][cX-1] === "w") {
      this.x += this.speed;
      this.speed = 0;
    }

    // checking if on grass
    if (aGrid[cY][cX] === "g") {
      if (this.speed >= 5){
        this.speed-=0.20;
      }
      else if (this.speed <= 5){
        this.speed -= 0.05;
      }
    }
    else if (aGrid[cY-1][cX] === "g") {
      if (this.speed >= 5){
        this.speed-=0.20;
      }
      else if (this.speed <= 5){
        this.speed -= 0.05;
      }
    }
    else if (aGrid[cY][cX] === "g") {
      if (this.speed >= 5){
        this.speed-=0.20;
      }
      else if (this.speed <= 5){
        this.speed -= 0.05;
      }
    }
    else if (aGrid[cY][cX-1] === "g") {
      if (this.speed >= 5){
        this.speed-=0.20;
      }
      else if (this.speed <= 5){
        this.speed -= 0.05;
      }
    }

    // check checkpoint and start
    // checkpoint
    if (aGrid[cY][cX] === "c" && this.check % 2 === 0) {
      this.check++;
    }
    // start
    if (aGrid[cY][cX] === "f" && this.check % 2 === 1) {
      this.lap++;
      this.check++;
    }
  }

  carMovement() {
    this.dx = cos(this.angle) * this.speed;
    this.dy = sin(this.angle) * this.speed;

    this.x += this.dx;
    this.y += this.dy;
  }

  handleKeyPress() {
    if (this.finish === false){
      // W
      if (keyIsDown(87)){
        this.speed += 0.1;
        if (this.speed > 8) {
          this.speed = 8;
        }
        this.timeStart = true;
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
        this.angle += this.turnSpeed;
      }
      // A
      if (keyIsDown(65)){
        this.angle -= this.turnSpeed;
      }
      if (keyIsPressed === false){
        this.speed -= 0.1;
        this.speed = constrain(this.speed,0,8);
      }
    }
    else {
      this.speed -= 0.1;
      this.speed = constrain(this.speed,0,8);
    }
  }

  displaySpeed() {
    text(int(this.speed*15) + "Km/h", width-100, height-50);
  }

  checkWin(){
    if (this.timeStart) {
      this.time = millis();
    }
    text("time " + (this.time/1000).toFixed(2), 50, 50);
    if (this.lap === 6){
      text("Your time was "+ int(this.time/1000) ,width/2,height/2);
      this.timeStart = false;
      this.finish = true;
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
  playerCar.checkWin();

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
  text("lap "+ playerCar.lap, width*0.95, height*0.05);
}
