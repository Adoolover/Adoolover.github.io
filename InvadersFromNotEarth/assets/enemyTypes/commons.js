// Travis Ahern
// Nov. 16, 2018

class CommonEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    // sprite
    this.img = img.commonEnemySprite;
    this.sprtSize = sprtSize;

    // bullets
    this.shot = bullet;
    this.shots = [];
  }

  takeTurn(dir, changedDir, numOfBullets) {
    this.move(dir, changedDir);
    this.display();

    if (numOfBullets <= 5) {
      this.shoot();
    }
  }

  display() {
    image(this.img, this.x, this.y, this.sprtSize, this.sprtSize);
  }

  move(dir, changedDir) {
    changedDir ? (this.y += this.sprtSize) : (this.x += (dir === "right" ? this.sprtSize : -this.sprtSize));
  }

  shoot() {
    let shot = random(1000);

    if (shot < 10) {
      this.shots.push(new this.shot(this.x, this.y, this.sprtSize, img.enemyBullet, "bad"));
    }
  }

  moveShots() {
    for (let i = this.shots.length-1; i >= 0; i--) {
      this.shots[i].move();
      if (this.shots[i].hitEdge()) {
        this.shots.splice(i,1);
      }
    }
  }
}
