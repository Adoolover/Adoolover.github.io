// Travis Ahern
// Dec. 1, 2018

class StrongEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    this.hp = 3;
    this.score = 3;

    // sprite
    this.img = img.strongEnemySprite;
    this.sprtSize = sprtSize;
    this.movement = this.sprtSize/2;
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
    let shot = random(15*numOfEnemysleft);

    return shot < numOfEnemysleft;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
