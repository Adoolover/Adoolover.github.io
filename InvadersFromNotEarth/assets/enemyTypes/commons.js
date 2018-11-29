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
    // this.shot = bullet;
    // this.shots = [];
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

  shoot(numOfEnemysleft) {
    let shot = random(10*numOfEnemysleft);

    if (shot < numOfEnemysleft/2) {
      return true;
    }

    return false;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
