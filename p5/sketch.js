// Two person game assignment. space invaders
// Cody Flynn
// 2018 11/16
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Player {
  constructor(image) {
    this.x = width/2;
    this.y =  height/2; //height*0.95;
    this.img = image;
    this.size = 100;
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);
  }

  movement() {
    if (keyIsDown(65)) {
      this.x -= 5;
    }
    if (keyIsDown(68)) {
      this.x += 5;
    }
    this.x = constrain(this.x,0 + 25,width - 25);
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
  playerOne = new Player(img.playerOneSprite);
}

function draw() {
  background(0);
  playerOne.display();
  playerOne.movement();
}
