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
const MAX_HEALTH = 5;

let startState = 0;
let state = 0;

let startButton1;

function preload() {
  // sprites
  img.commonEnemySprite = loadImage("assets/Img/Commons.png");
  img.enemyBullet = loadImage("assets/Img/enemyBullets.png");
  img.playerBullet = loadImage("assets/Img/playerBullets.png");
  img.playerOneSprite = loadImage("assets/Img/PlayerBig.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  noStroke();

  // text
  textSizes = (width*0.025 + height*0.025)/2;
  textSize(textSizes);

  // enemy vars
  numOfEnemys = 15;
  spriteSize.enemy = (width*0.03 + height*0.03)/2;

  // player vars
  spriteSize.player = (width*0.08 + height*0.08)/2;
  playerOne = new Player(img.playerOneSprite, 1, spriteSize.player, MAX_HEALTH);

  // buttons
  startButton1 = new Button(width/2, height/2, spriteSize.player);
}

function draw() {
  background(0);

  if (startState === 0) {
    startScreen();
  }

  else if (startState === 1){
    enemyFoos();
    playersFoo();
  }

  else {
    gameOver();
  }
}

function playersFoo() {
  playerOne.display();
  playerOne.movement();
  if (playerOne.checkHealth()) {
    gameOver();
  }
  if (playerOne.health <= 0) {
    playerOne.health = MAX_HEALTH;
    playerOne.lives--;
    enemyBoxs = [];
    if (playerOne.lives < 0) {
      gameOver();
    }
  }
}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
    if (enemyBoxs[i].enemyHitBottom() || enemyBoxs[i].moveAllShots(playerOne.x, playerOne.y)) {
      playerOne.health--;
      break;
    }
    else {
      enemyBoxs[i].empty() ? enemyBoxs.splice(i,1) : enemyBoxs[i].checkTurn();
    }
  }
}

function startScreen() {
  startButton1.drawButton();
  startState = startButton1.checkClick();
}

function keyPressed() {
  if (keyCode === 87) { // W
    playerOne.projectiles.push(new Bullet(playerOne.x - spriteSize.player*0.35, playerOne.y, spriteSize.player/2, img.playerBullet, "good"));
    playerOne.projectiles.push(new Bullet(playerOne.x + spriteSize.player*0.35, playerOne.y, spriteSize.player/2, img.playerBullet, "good"));
  }
}

function gameOver() {
  startState = -1;
  text("YOU LOSE", width/2, height/2);
}


function mousePressed() {
  if (startState === 1) {
    enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, spriteSize.enemy, 1));
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
  }
}
