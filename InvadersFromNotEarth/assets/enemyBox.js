// Travis Ahern
// Nov. 16, 2018

class EnemyBox {
  constructor(x, y, enemyType, numOfEnemys, sprtSize, timer) {
    // position
    this.x = x;
    this.y = y;
    this.dir = random(["right", "left"]);

    // enemys
    this.enemysAcrsX = int(numOfEnemys);
    this.enemysAcrsY = int(this.enemysAcrsX*0.50);
    this.enemyType = enemyType;
    this.sprtSize = sprtSize;
    this.enemys = [];
    this.numOfShots = 0;

    // time between actions
    this.timeDelay = timer*1000;
    this.timer = millis();
  }

  spawnEnemys() {
    for (let i = -this.enemysAcrsX/2; i < this.enemysAcrsX/2; i++) {
      for (let j = -this.enemysAcrsY/2; j < this.enemysAcrsY/2; j++) {

        // fill this box with enemy units
        let x = this.x + this.sprtSize*i + this.sprtSize/2;
        let y = this.y + this.sprtSize*j + this.sprtSize/2;
        this.enemys.push(new this.enemyType(x, y, this.sprtSize, Bullet));
      }
    }
  }

  moveAllShots(playerX, playerY) {
    // move shots
    for (let i = this.enemys.length-1; i >= 0; i--) {
      if (this.enemys[i].moveShots(playerX, playerY)) {
        return true;
      }
    }

    return false;
  }

  checkTurn() {
    // temperary white box
    push();
    noFill();
    stroke("white");
    rect(this.x, this.y, this.sprtSize*this.enemysAcrsX, this.sprtSize*this.enemysAcrsY);
    pop();


    // take turn
    let elapsedTime = millis() - this.timer;
    elapsedTime > this.timeDelay ? this.move() : this.enemys.map(enemys => enemys.display());
  }

  move() {
    // take turn
    this.timer = millis();
    
    // change directions?
    let changedDir = this.dir;
    this.dir === "right" ?
      (this.dir = (this.boxEdge("right") < width ? "right" : "left")):
      (this.dir = (this.boxEdge("left") < 0 ? "right" : "left"));
    changedDir = (changedDir !== this.dir);

    // enemy movement
    for (let i = 0; i < this.enemys.length; i++) {
      // enemy shots
      if (this.numOfShots < 3) {
        if (this.enemys[i].shoot()) {
          this.numOfShots++;
        }
      }
      this.enemys[i].takeTurn(this.dir, changedDir);
    }
    this.numOfShots = 0;

    // move
    changedDir ? (this.y += this.sprtSize) : (this.x += (this.dir === "right" ? this.sprtSize : -this.sprtSize));
  }

  empty() {
    // empty box
    return this.enemys.length <= 0;
  }

  enemyHitBottom() {
    for (let i = 0; i < this.enemys.length; i++) {
      if (this.enemys[i].hitBottom()) {
        // enemy hits the bottom of the screen
        return true;
      }
    }
    return false;
  }

  boxEdge(dir) {
    // hitting edge of screen
    return (dir === "right" ?
    this.x + this.sprtSize * this.enemysAcrsX/2 + this.sprtSize:
    this.x - this.sprtSize * this.enemysAcrsX/2 - this.sprtSize);
  }
}
