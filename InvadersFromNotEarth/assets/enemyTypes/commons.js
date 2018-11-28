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

  display() {
    image(this.img, this.x, this.y, this.sprtSize, this.sprtSize);
  }

  takeTurn(dir, changedDir) {
    // actions
    this.move(dir, changedDir);
    this.display();
  }

  move(dir, changedDir) {
    changedDir ? (this.y += this.sprtSize) : (this.x += (dir === "right" ? this.sprtSize : -this.sprtSize));
  }

  shoot() {
    let shot = random(1000);

    if (shot < 20) {
      this.shots.push(new this.shot(this.x, this.y, this.sprtSize, img.enemyBullet, "bad"));
      return true;
    }

    return false;
  }

  moveShots(playerX, playerY) {
    for (let i = this.shots.length-1; i >= 0; i--) {
      this.shots[i].move();

      if (this.shots[i].hitPlayer(playerX, playerY)) {
        this.shots.splice(i, 1);
        return true;
      }

      else if (this.shots[i].hitEdge()) {
        this.shots.splice(i,1);
      }
    }

    return false;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
