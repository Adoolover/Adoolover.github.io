// Space Invaders
//
// DIRECTED BY:
// Cody Flynn
// Travis Ahern
//
// PRODUCED BY:
// Travis Ahern
// Cody Flynn
//
// SCRIPTED BY:
// Cody Flynn
// Travis Ahern
//
// ART BY:
// Travis Ahern
// Cody Flynn
//
// MADE ON:
// November 16,
// of the year 2018
//
// THINGS THAT DON'T WORK:
// - Cody Flynn

let img = {};
let spriteSize = {};
let enemyBoxs = [];
let numOfEnemys;
let playerOne;
let state = 0;
let startButton1;


let bullets = [];

function preload() {
  img.commonSprite = loadImage("assets/Img/Commons.png");
  img.bullet = loadImage("assets/Img/Bullets.png");
  img.playerOneSprite = loadImage("assets/Img/PlayerBig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  playerOne = new Player(img.playerOneSprite);
  spriteSize.width = width*0.025;
  spriteSize.height = height*0.03;
  numOfEnemys = 5;

  stroke("white");
  noFill();
}

function draw() {
  background(0);
  enemyFoos();

  if (state === 0){
    startScreen();
  }
  else{
    playerOne.display();
    playerOne.movement();
  }

}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
    let y = enemyBoxs[i].y + enemyBoxs[i].enysAcrsY/2*enemyBoxs[i].sprtH;
    y >= height ? enemyBoxs.splice(i,1) : enemyBoxs[i].checkTurn();
  }
}

function startScreen() {
  startButton1 = new Button();
  startButton1.drawButton();
  state = startButton1.checkClick();
}

function mousePressed() {
  if (state === 1) {
    if (keyIsDown(16)) {
      bullets.push(new Bullet(mouseX, mouseY, spriteSize.width, spriteSize.height, "good"));
    }
    else {
      enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, spriteSize.width, spriteSize.height, 1));
    }
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
  }
}
