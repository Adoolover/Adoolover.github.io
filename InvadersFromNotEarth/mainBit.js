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
let allSounds = {};
let spriteSize = {};
let textSizes;

let enemyBoxs = [];
let enemyTypes = [];
let numOfEnemys = 8;
let maxEnemyBoxs = 4;
let hardMode = false;

let players = [];
let playerImgs = [];
const MAX_HEALTH = 5;

let allPowerUps = [];
let powerUps = [];

let startState;
let state;
let score;

const TIME_DELAY = 20000;
let startGameTimer;
let timer;

let button = {};

function preload() {
  // sounds
  soundFormats("mp3", "wav");

  allSounds.background = loadSound("assets/noise/background_1.wav");

  allSounds.enemyDeath = loadSound("assets/noise/enemyDeath.wav");
  allSounds.enemyLaser = loadSound("assets/noise/enemyLaser.wav");

  allSounds.playerDeath = loadSound("assets/noise/playerDeath.mp3");
  allSounds.playerLaser = loadSound("assets/noise/playerLaser.wav");

  allSounds.powerUpNoise = loadSound("assets/noise/powerUpsNoise.wav");
  allSounds.gameOver = loadSound("assets/noise/gameOver_1.wav");

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

  // sounds
  allSounds.background.setVolume(0.4);
  allSounds.background.play();
  allSounds.background.setLoop(true);

  allSounds.enemyDeath.setVolume(0.15);
  allSounds.enemyLaser.setVolume(0.1);
  allSounds.playerDeath.setVolume(0.5);
  allSounds.playerLaser.setVolume(0.75);
  allSounds.powerUpNoise.setVolume(0.25);

  // start
  startState = 0;
  state = 0;
  score = 0;

  // text
  textSizes = (width*0.025 + height*0.025)/2;
  textSize(textSizes);

  // enemy vars
  enemyTypes = [CommonEnemy, CommonEnemy, CommonEnemy];
  enemyBoxs = [];
  spriteSize.enemy = (width*0.03 + height*0.03)/2;
  enemyBoxs.push(new EnemyBox(CommonEnemy, spriteSize.enemy, Bullet, img.enemyBullet, 1, numOfEnemys, hardMode));
  enemyBoxs[enemyBoxs.length-1].spawnEnemys();

  // player vars
  spriteSize.player = (width*0.08 + height*0.08)/2;
  playerImgs = [img.playerOneSprite, img.playerTwoSprite];
  players = [];

  // power ups
  allPowerUps = [ExtraLife, FastAttack, MaxHealth, MoreMaxHealth];
  powerUps = [];

  // timer
  startGameTimer = 0;
  timer = 0;

  // buttons
  button.single = new Button(width/2, height*0.30, "SINGLE PLAYER");
  button.coop = new Button(width/2, height*0.70, "CO-OP");
}

function draw() {
  background(0);

  if (startState === 0) {
    startScreen();
    displayControls();
    startGameTimer = millis();
    timer = millis();
    for (let i = 0; i < startState; i++) {
      let xMin = spriteSize.player;
      let xMax = width - spriteSize.player;
      players.push(new Player(random(xMin, xMax), playerImgs[i], i+1, spriteSize.player, MAX_HEALTH, 3));
    }
  }

  else if (startState === 1 || startState === 2){
    spawnEnemyBoxes();
    enemyFoos();
    displayScore();
    playersFoo();
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
  text("PLAYER 2:\nUP - SHOOT\nLEFT - LEFT\nRIGHT - RIGHT\nSPACE - REVIVE", width*0.90, height*0.40);
}

function spawnEnemyBoxes() {
  if (startState !== 0 && enemyBoxs.length <= maxEnemyBoxs && state === 1) {
    enemyBoxs.push(new EnemyBox(random(enemyTypes), spriteSize.enemy, Bullet, img.enemyBullet, 1, numOfEnemys, hardMode));
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
    state = 0;
  }

  else {
    let elapsedTime = millis() - timer;
    let compareTime = TIME_DELAY-(millis()-startGameTimer)/50;
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
              spawnPowerUp(enemyBoxs[i].enemys[w].x, enemyBoxs[i].enemys[w].y);
              allSounds.enemyDeath.play();
              enemyBoxs[i].enemys.splice(w, 1);
              players[playerNum].projectiles.splice(j, 1);
              score += 5;
              if (score % 500 === 0) {
                if (score % 2000 === 0) {
                  hardMode = !hardMode;
                }

                else if (score % 1500 === 0) {
                  numOfEnemys += 2;
                  numOfEnemys = constrain(numOfEnemys, 6, 20);
                }

                else {
                  maxEnemyBoxs += 2;
                  maxEnemyBoxs = constrain(maxEnemyBoxs, 10, 20);
                }
              }
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

function spawnPowerUp(x, y) {
  // chance to drop a power up
  let dropChance = random(100);

  if (dropChance <= 1) {
    powerUps.push(new PowerUp(x, y, new (random(allPowerUps)), spriteSize.player));
  }
}

function powerUpFoo() {
  // power ups
  for (let i = powerUps.length-1; i >= 0; i--) {
    powerUps[i].display();
    powerUps[i].move();
    if (powerUps[i].hitEdge()) {
      powerUps.splice(i, 1);
      break;
    }
    for (let playerNum = players.length-1; playerNum >= 0; playerNum--) {
      if (dist(players[playerNum].x, players[playerNum].y, powerUps[i].x, powerUps[i].y) < spriteSize.player/2) {
        players[playerNum] = powerUps[i].pickUpPower(players[playerNum]);
        powerUps.splice(i, 1);
        allSounds.powerUpNoise.play();
        break;
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

      if (players.length < 2) {
        if (players[playerNum].lives > 1 && keyCode === 32) { // SPACE
          players[playerNum].lives--;

          players.push(new Player(players[playerNum].x,
            (players[playerNum].playerNum === 1 ? img.playerTwoSprite : img.playerOneSprite),
            (players[playerNum].playerNum === 1 ? 2:1),
            spriteSize.player, MAX_HEALTH, 1));
          break;
        }
      }

      if (players[playerNum].checkHealth()) {
        players.splice(playerNum, 1);
        allSounds.playerDeath.play();
      }
    }
  }
  else {
    gameOver();
  }
}

function displayScore() {
  push();
  fill(255);
  textAlign(LEFT, TOP);
  text("SCORE: " + score, width*0.01, height*0.01);
  pop();
}

function gameOver() {
  allSounds.background.stop();
  allSounds.gameOver.play();
  startState = -1;
  fill("white");
  textSize(textSizes*2);
  text("YOU LOSE\nSCORE: " + score, width/2, height/2);
  noLoop();
}
