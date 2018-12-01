// Travis Ahern
// Nov. 16, 2018

class CommonEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    this.hp = 2;

    // sprite
    this.img = img.commonEnemySprite;
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
    let moved = this.sprtSize;
    changedDir ? (this.y += moved) : (this.x += (dir === "right" ? moved : -moved));
    return moved;
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
