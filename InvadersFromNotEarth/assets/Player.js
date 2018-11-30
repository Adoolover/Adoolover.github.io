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
    this.health = this.maxHealth;

    this.timeDelay = 500;
    this.timer = millis();
    this.attacking = false;
    this.projectiles = [];
  }

  display(y) {
    let livesPos = height*0.075*(y+1);
    image(this.img, this.x, this.y, this.size, this.size);

    // displaying lives
    fill("white");
    text("Lives", width*0.97, livesPos - this.size*0.25);

    for (let i = 0; i < this.lives-1; i++) {
      let x = this.size*0.25*i;
      image(this.img, width*0.99 - x, livesPos, this.size*0.25, this.size*0.25);
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
    if (this.playerNum === 1) {
      if (keyIsDown(65)) { // A
        this.x -= this.dx;
      }

      if (keyIsDown(68)) { // D
        this.x += this.dx;
      }
    }

    else if (this.playerNum === 2) {
      if (keyIsDown(37)) { // LEFT_ARROW
        this.x -= this.dx;
      }

      if (keyIsDown(39)) { // RIGHT_ARROW
        this.x += this.dx;
      }
    }

    this.x = constrain(this.x, 0 + this.size/2, width - this.size/2);
  }

  attack() {
    if (this.attacking) {
      if (keyIsDown(87) && this.playerNum === 1) { // W
        this.projectiles.push(new Bullet(this.x - spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.projectiles.push(new Bullet(this.x + spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.timer = millis();
        this.attacking = false;
      }

      else if (keyIsDown(38) && this.playerNum === 2) { // UP_ARROW
        this.projectiles.push(new Bullet(this.x - spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.projectiles.push(new Bullet(this.x + spriteSize.player*0.35, this.y, spriteSize.player/2, img.playerBullet, "good"));
        this.timer = millis();
        this.attacking = false;
      }
    }

    else {
      let elapsedTime = millis() - this.timer;
      if (elapsedTime > this.timeDelay) {
        this.timer = millis();
        this.attacking = true;
      }
    }
  }

  // checkcing lives
  checkHealth() {
    if (this.health <= 0) {
      this.lives--;
      this.health = this.maxHealth;
    }
    return this.lives <= 0;
  }

  healthBar() {
    let backBar = this.size;
    let frontBar = backBar - (this.maxHealth-this.health)*backBar/this.maxHealth;

    // back bar
    fill(0,0,255);
    rect(this.x, this.y + this.size*0.50, backBar, this.size/8);

    // health bar
    fill(255,0,0);
    rect(this.x, this.y + this.size*0.50, frontBar, this.size/8);
  }

  collision(x, y) {
    return dist(this.x, this.y, x, y) < this.sprtSize;
  }
}
