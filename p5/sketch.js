// Two person game assignment. space invaders
// Cody Flynn
// 2018 11/16
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Creating the player and some of its propertys
class Player {
  constructor(image) {
    this.x = width/2;
    this.y = height*0.93;
    this.img = image;
    this.size = 100;
    this.dx = 7;
    this.lifes = 3;
    this.health = 5;
    this.deathOccured = false;
  }

  display() {
    // displaying the player and checking the health
    if (this.health === 0){
      tint(255,0);
      image(this.img, this.x, this.y, this.size, this.size);
      this.deathOccured = true;
    }
    else{
      tint(255, 255);
      image(this.img, this.x, this.y, this.size, this.size);
    }

    // displaying text after death of player
    if (this.deathOccured){
      fill(255);
      text("Press Space to continue", width/2, height/2);
      if (keyIsPressed(32)){
        this.lifes -= 1;
        this.health = 5;
      }
    }

    // displaying the amount of lifes left
    if (this.lifes === 3) {
      fill(255);
      text("Lives",width - 20, 30);
      image(this.img, width- 20, 50, this.size*0.25, this.size*0.25);
      image(this.img, width- 20 - this.size*0.25, 50, this.size*0.25, this.size*0.25);
    }
    else if (this.lifes === 2) {
      fill(255);
      text("Lives",width - 20, 30);
      image(this.img, width- 20, 50, this.size*0.25, this.size*0.25);
    }
    else{
      fill(255);
      text("Lives",width - 20, 30);
    }
  }

  // moving the player
  movement() {
    if (keyIsDown(65)) {
      this.x -= this.dx;
    }
    if (keyIsDown(68)) {
      this.x += this.dx;
    }
    this.x = constrain(this.x,0 + this.size/2,width - this.size/2);
  }

  // creating new projectiles
  keyIsPressed(){
    if (key === 87){
      let playerProjectile = new Projectile;
    }
  }
}

class Button  {
  constructor(){
    // assigning varribiles
    this.x = width/2;
    this.y = height/2;
    this.length = 500;
    this.w = 200;
    this.hit;
  }
  drawButton() {
    rect(this.x - this.length/2, this.y - this.w/2, this.length, this.w);
    if (this.hit === true){
      textSize(50);
      fill("red");
      text("Press to start", this.x, this.y);
      textSize(10);
    }
    else{
      textSize(50);
      text("Press to start", this.x, this.y);
      textSize(10);
    }
  }

  checkClick() {
    this.hit = collidePointRect(mouseX,mouseY,this.x - this.length/2,this.y - this.w/2,this.length,this.w);
    if (this.hit === true && mouseIsPressed){
      state = 1;
    }
  }
}

let playerOne;
let img = {};
let state = 0;
let startButton1;

function preload () {
  img.playerOneSprite = loadImage("assets/PlayerBig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  playerOne = new Player(img.playerOneSprite);
}

function draw() {
  background(0);
  if (state === 0){
    startScreen();
  }
  else{
    playerOne.display();
    playerOne.movement();
  }
}

function startScreen() {
  startButton1 = new Button();
  startButton1.drawButton();
  startButton1.checkClick();
}
