// Travis Ahern
// Nov. 16, 2018

class CommonEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    this.hp = 1;
    this.score = 1;

    // sprite
    this.img = img.commonEnemySprite;
    this.sprtSize = sprtSize;
    this.movement = this.sprtSize;
  }

  display() {
    image(this.img, this.x, this.y, this.sprtSize, this.sprtSize);
  }

  takeTurn(dir, changedDir) {
    // actions
    this.display();
    return this.move(dir, changedDir);
  }

  move(dir, changedDir) {
    changedDir ? (this.y += this.movement) : (this.x += (dir === "right" ? this.movement : -this.movement));
    return this.movement;
  }

  shoot(numOfEnemysleft) {
    // chance to fire a bullet
    // chance based on number of live enemys in this platoon
    let shot = random(10*numOfEnemysleft);

    return shot < numOfEnemysleft;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
