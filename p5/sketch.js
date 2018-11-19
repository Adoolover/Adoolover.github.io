// Two person game assignment. space invaders
// Cody Flynn
// 2018 11/16
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Creating the player and some of its propertiys
class Player {
  constructor(image) {
    this.x = width/2;
    this.y = height*0.93;
    this.img = image;
    this.size = 75;
    this.dx = 7;
    this.lifes = 3;
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);
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

  movement() {
    if (keyIsDown(65)) {
      this.x -= this.dx;
    }
    if (keyIsDown(68)) {
      this.x += this.dx;
    }
    this.x = constrain(this.x,0 + this.size/2,width - this.size/2);
  }
}

let playerOne;
let img = {};

function preload () {
  img.playerOneSprite = loadImage("assets/Player.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  playerOne = new Player(img.playerOneSprite);
}

function draw() {
  background(0);
  playerOne.display();
  playerOne.movement();
}
