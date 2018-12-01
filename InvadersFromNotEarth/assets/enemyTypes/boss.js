// Travis Ahern
// Dec. 1, 2018

class BossEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    this.hp = 20;

    // sprite
    this.img = img.bossEnemySprite;
    this.sprtSize = sprtSize;
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
    let moved = this.sprtSize/2;
    changedDir ? (this.y += moved) : (this.x += (dir === "right" ? moved : -moved));
    return moved;
  }

  shoot(numOfEnemysleft) {
    // chance to fire a bullet
    // chance based on number of live enemys in this platoon
    let shot = random(2*numOfEnemysleft);

    return shot < numOfEnemysleft;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
