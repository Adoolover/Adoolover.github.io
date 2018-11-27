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
let textSizes;

let enemyBoxs = [];
let numOfEnemys;

let playerOne = {};
let playerProjectiles = [];

let startState = 0;
let state = 0;

let startButton1;

function preload() {
  img.commonEnemySprite = loadImage("assets/Img/Commons.png");
  img.bullet = loadImage("assets/Img/Bullets.png");
  img.playerOneSprite = loadImage("assets/Img/PlayerBig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);

  textSizes = (width*0.025 + height*0.025)/2;
  textSize(textSizes);
  noStroke();

  numOfEnemys = 5;
  spriteSize.enemy = (width*0.03 + height*0.03)/2;

  spriteSize.player = (width*0.08 + height*0.08)/2;
  playerOne = new Player(img.playerOneSprite, 1, spriteSize.player);

  startButton1 = new Button(width/2, height/2, spriteSize.player);
}

function draw() {
  background(0);

  if (startState === 0) {
    startScreen();
  }

  else {
    enemyFoos();
    playersFoo();
  }
}

function playersFoo() {
  playerOne.display();
  playerOne.movement();
  bulletFoo();
}

function bulletFoo() {
  for (let i = playerProjectiles.length-1; i >= 0; i--) {
    playerProjectiles[i].move();
    if (playerProjectiles[i].hitEdge()) {
      playerProjectiles.splice(i, 1);
    }
  }
}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
    let y = enemyBoxs[i].y + enemyBoxs[i].enemysAcrsY/2*enemyBoxs[i].sprtSize;
    y >= height ? enemyBoxs.splice(i,1) : enemyBoxs[i].checkTurn();
  }
}

function startScreen() {
  startButton1.drawButton();
  startState = startButton1.checkClick();
}

function keyPressed() {
  if (keyIsDown(87)) { // W
    playerProjectiles.push(new Bullet(playerOne.x, playerOne.y, spriteSize.player/2, "good"));
  }
}


function mousePressed() {
  if (startState === 1) {
    enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, spriteSize.enemy, 1));
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
  }
}
