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
let score = 0;

let enemyBoxs = [];
let numOfEnemys;

let players = [];
const MAX_HEALTH = 5;

let startState = 0;
let state = 0;

let startButton1;

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

  // text
  textSizes = (width*0.025 + height*0.025)/2;
  textSize(textSizes);

  // enemy vars
  numOfEnemys = 15;
  spriteSize.enemy = (width*0.03 + height*0.03)/2;

  // player vars
  spriteSize.player = (width*0.08 + height*0.08)/2;
  players.push(new Player(img.playerOneSprite, 1, spriteSize.player, MAX_HEALTH));
  players.push(new Player(img.playerTwoSprite, 2, spriteSize.player, MAX_HEALTH));


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
    displayScore();
  }

  else {
    gameOver();
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
              score += 10;
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

function startScreen() {
  startButton1.drawButton();
  startState = startButton1.checkClick();
}

function gameOver() {
  startState = -1;
  text("YOU LOSE", width/2, height/2);
}


function mousePressed() {
  if (startState === 1) {
    enemyBoxs.push(new EnemyBox(mouseX, mouseY, CommonEnemy, numOfEnemys, spriteSize.enemy, Bullet, img.enemyBullet, 1));
    enemyBoxs[enemyBoxs.length-1].spawnEnemys();
  }
}

function displayScore() {
  fill(255);
  text("Score: " + score, width*0.05, height*0.03)
}
