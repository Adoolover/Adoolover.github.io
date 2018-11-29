// Cody Flynn
// Nov. 24, 2018

// Creating the player and some of its propertys
class Player {
  constructor(image, oneTwo, size, maxHealth) {
    this.x = width/2;
    this.y = height*0.93;

    this.dx = width*0.006;

    this.img = image;
    this.size = size;
    this.playerNum = oneTwo;

    this.lives = 3;
    this.maxHealth = maxHealth;
    this.health = maxHealth;
    // this.deathOccured = false;

    this.projectiles = [];
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);

    // displaying lives
    fill("white");
    text("Lives", width*0.97, height*0.03);

    for (let i = 0; i < this.lives-1; i++) {
      let x = this.size*0.25*i;
      image(this.img, width*0.99 - x, height*0.05, this.size*0.25, this.size*0.25);
    }

    for (let i = this.projectiles.length-1; i >= 0; i--) {
      this.projectiles[i].move();
      if (this.projectiles[i].hitEdge()) {
        this.projectiles.splice(i, 1);
      }
    }
  }

  // moving
  movement() {
    if (keyIsDown(65)) { // A
      this.x -= this.dx;
    }

    if (keyIsDown(68)) { // D
      this.x += this.dx;
    }

    this.x = constrain(this.x, 0 + this.size/2, width - this.size/2);
  }

  // checkcing lives
  checkHealth() {
    if (this.health <= 0) {
      this.lives--;
      this.health = this.maxHealth;
      return true;
    }
  }

  checkLives() {
    if (this.lives <= 0) {
      return true;
    }
  }

  healthBar() {
    rect(width/2,height/2, this.size, this.size/4)
    fill(255,0,0);
    rect(width/2,height/2, this.size, this.size/4)
  }
}
