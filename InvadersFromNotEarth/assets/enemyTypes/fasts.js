// Travis Ahern
// Dec. 1, 2018

class FastEnemy {
  constructor(x, y, sprtSize, bullet) {
    // position
    this.x = x;
    this.y = y;

    this.hp = 1;
    this.score = 2;

    // sprite
    this.img = img.fastEnemySprite;
    this.sprtSize = sprtSize;
    this.movement = this.sprtSize*3;
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
    let moved = changedDir ? this.movement/2 : this.movement;
    changedDir ? (this.y += moved) : (this.x += (dir === "right" ? moved : -moved));
    return moved;
  }

  shoot(numOfEnemysleft) {
    // chance to fire a bullet
    // chance based on number of live enemys in this platoon
    let shot = random(5*numOfEnemysleft);

    return shot < numOfEnemysleft;
  }

  hitBottom() {
    return this.y + this.sprtSize >= height*0.95;
  }
}
