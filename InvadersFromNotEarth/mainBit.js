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
let enemyTypes = [];
const MAX_ENEMY_BOXS = 10;

let players = [];
let playerImgs = [];
const MAX_HEALTH = 5;

let allPowerUps = [];
let powerUps = [];

let startState;
let state;
let score;
let runningMillis;

const TIME_DELAY = 20000;
let timer;

let button = {};

function preload() {
  // sprites
  img.commonEnemySprite = loadImage("assets/img/commons.png");
  img.enemyBullet = loadImage("assets/img/enemyBullets.png");
  img.playerBullet = loadImage("assets/img/playerBullets.png");
  img.playerOneSprite = loadImage("assets/img/playerOne.png");
  img.playerTwoSprite = loadImage("assets/img/playerTwo.png");

  // power ups
  img.extraLife = loadImage("assets/img/playerOne.png");
  img.fastAttack = loadImage("assets/img/fastAttack.png");
  img.maxHealth = loadImage("assets/img/maxHealth.png");
  img.moreMaxHealth = loadImage("assets/img/moreMaxHealth.png");
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
  enemyTypes = [CommonEnemy, CommonEnemy, CommonEnemy];
  enemyBoxs = [];
  spriteSize.enemy = (width*0.03 + height*0.03)/2;
  enemyBoxs.push(new EnemyBox(CommonEnemy, spriteSize.enemy, Bullet, img.enemyBullet, 1));
  enemyBoxs[enemyBoxs.length-1].spawnEnemys();

  // player vars
  spriteSize.player = (width*0.08 + height*0.08)/2;
  playerImgs = [img.playerOneSprite, img.playerTwoSprite];
  players = [];

  // power ups
  allPowerUps = [ExtraLife, FastAttack, MaxHealth, MoreMaxHealth];
  powerUps = [];

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
    displayControls();
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
    powerUpFoo();
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

function displayControls() {
  fill("white");

  // player 1
  text("PLAYER 1:\n'W' - SHOOT\n'A' - LEFT\n'D' - RIGHT", width*0.10, height*0.40);

  // player 2
  text("PLAYER 2:\nUP - SHOOT\nLEFT - LEFT\nRIGHT - RIGHT\nSPACE - REVIVE\ndoes not work", width*0.90, height*0.40);
}

function spawnEnemyBoxes() {
  if (startState !== 0 && enemyBoxs.length <= MAX_ENEMY_BOXS && state === 1) {
    enemyBoxs.push(new EnemyBox(random(enemyTypes), spriteSize.enemy, Bullet, img.enemyBullet, 1));
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
    if (enemyBoxs[i].empty()) {
      spawnPowerUp(enemyBoxs[i].x, enemyBoxs[i].y);
      enemyBoxs.splice(i, 1);
    }
    else {
      enemyBoxs[i].checkTurn();
    }
  }
}

function spawnPowerUp(x, y) {
  // chance to drop a power up
  let dropChance = random(100);

  if (dropChance <= 101) {
    powerUps.push(new PowerUp(x, y, random(allPowerUps), spriteSize.player));
  }
}

function powerUpFoo() {
  // power ups
  for (let i = powerUps.length-1; i >= 0; i--) {
    powerUps[i].display();
    powerUps[i].move();
    for (let playerNum = players.length-1; playerNum >= 0; playerNum--) {
      if (players[playerNum].collision(powerUps[i].x, powerUps[i].y)) {
        players[playerNum] = powerUps[i].pickUpPower(player[playerNum]);
        powerUps.splice(i, 1);
      }
    }
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
