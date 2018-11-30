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
const MAX_ENEMY_BOXS = 10;

let players = [];
let playerImgs = [];
const MAX_HEALTH = 5;

let startState;
let state;
let score;
let runningMillis;

const TIME_DELAY = 10000;
let timer;

let button = {};

function preload() {
  // sprites
  img.commonEnemySprite = loadImage("assets/Img/Commons.png");
  img.enemyBullet = loadImage("assets/Img/enemyBullets.png");
  img.playerBullet = loadImage("assets/Img/playerBullets.png");
  img.playerOneSprite = loadImage("assets/Img/PlayerOne.png");
  img.playerTwoSprite = loadImage("assets/Img/PlayerTwo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  noStroke();

  // start
  startState = 0;
  state = 0;
  score = 0;
  runningMillis = millis();

  // text
  textSizes = (width*0.025 + height*0.025)/2;
  textSize(textSizes);

  // enemy vars
  enemyBoxs = [];
  spriteSize.enemy = (width*0.03 + height*0.03)/2;
  enemyBoxs.push(new EnemyBox(CommonEnemy, spriteSize.enemy, Bullet, img.enemyBullet, 1));
  enemyBoxs[enemyBoxs.length-1].spawnEnemys();

  // player vars
  spriteSize.player = (width*0.08 + height*0.08)/2;
  playerImgs = [img.playerOneSprite, img.playerTwoSprite];
  players = [];

  // timer
  timer = runningMillis;

  // buttons
  button.single = new Button(width/2, height*0.30, "SINGLE PLAYER");
  button.coop = new Button(width/2, height*0.70, "CO-OP");
}

function draw() {
  background(0);

  if (startState === 0) {
    startScreen();
    timer = runningMillis;
    for (let i = 0; i < startState; i++) {
      players.push(new Player(playerImgs[i], i+1, spriteSize.player, MAX_HEALTH));
    }
  }

  else if (startState === 1 || startState === 2){
    spawnEnemyBoxes();
    enemyFoos();
    playersFoo();
    displayScore();
  }

  else {
    gameOver();
  }
}

function startScreen() {
  button.single.drawButton();
  button.coop.drawButton();

  if (button.single.checkClick()) {
    startState = 1;
  }

  else if (button.coop.checkClick()) {
    startState = 2;
  }
}

function spawnEnemyBoxes() {
  if (startState !== 0 && enemyBoxs.length <= MAX_ENEMY_BOXS && state === 1) {
    enemyBoxs.push(new EnemyBox(CommonEnemy, spriteSize.enemy, Bullet, img.enemyBullet, 1));
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
    state = 0;
  }

  else {
    let elapsedTime = millis() - timer;
    let compareTime = TIME_DELAY-millis()/100;
    compareTime = constrain(compareTime, 100, Infinity);
    if (elapsedTime > compareTime) {
      timer = millis();
      state = 1;
    }
  }
}

function enemyFoos() {
  for (let i = enemyBoxs.length-1; i >= 0; i--) {
      for (let playerNum = players.length-1; playerNum >= 0; playerNum--) {
        for (let j = players[playerNum].projectiles.length-1; j >= 0; j--) {
        // bullet in the box
        if (players[playerNum].projectiles[j].x > enemyBoxs[i].leftEdge() && players[playerNum].projectiles[j].x < enemyBoxs[i].rightEdge()
        && players[playerNum].projectiles[j].y > enemyBoxs[i].topEdge() && players[playerNum].projectiles[j].y < enemyBoxs[i].bottomEdge()) {
          // checking if bullet hits enemmy
          for (let w = enemyBoxs[i].enemys.length-1; w >= 0; w--) {
            if (enemyBoxs[i].hitByBullet(w, players[playerNum].projectiles[j].x, players[playerNum].projectiles[j].y)) {
              enemyBoxs[i].enemys.splice(w, 1);
              players[playerNum].projectiles.splice(j, 1);
              score += 5;
              break;
            }
          }
        }
      }
    }

    // bullet hits player or enemys hit bottom
    enemyBoxs[i].moveAllShots();
    for (let playerNum = players.length-1; playerNum >= 0; playerNum--) {
      if (enemyBoxs[i].collisionShots(players[playerNum].x, players[playerNum].y)) {
        players[playerNum].health--;
      }
      else if (enemyBoxs[i].enemyHitBottom()) {
        enemyBoxs = [];
        players[playerNum].lives--;
        break;
      }
    }

    // no more enemys
    enemyBoxs[i].empty() ? enemyBoxs.splice(i, 1) : enemyBoxs[i].checkTurn();
  }
}

function playersFoo() {
  if (players.length > 0) {
    for (let playerNum = players.length-1; playerNum >= 0; playerNum--) {
      players[playerNum].display(playerNum);
      players[playerNum].movement();
      players[playerNum].attack();
      players[playerNum].healthBar();

      if (players[playerNum].checkHealth()) {
        players.splice(playerNum, 1);
      }
    }
  }
  else {
    gameOver();
  }
}

function displayScore() {
  fill(255);
  text("Score: " + score, width*0.05, height*0.03);
}

function gameOver() {
  startState = -1;
  fill("white");
  text("YOU LOSE\nSCORE: " + score, width/2, height/2);
}
