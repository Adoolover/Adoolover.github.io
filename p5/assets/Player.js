// Creating the player and some of its propertys
class Player {
  constructor(image) {
    this.x = width/2;
    this.y = height*0.93;
    this.img = image;
    this.size = (width*0.08 + height*0.08)/2;
    this.dx = 7;
    this.lifes = 3;
    this.health = 5;
    this.deathOccured = false;
  }

  display() {
    // displaying the player and checking the health
    if (this.health === 0){
      tint(255,0);
      image(this.img, this.x, this.y, this.size, this.size);
      this.deathOccured = true;
    }
    else{
      tint(255, 255);
      image(this.img, this.x, this.y, this.size, this.size);
    }

    // displaying text after death of player
    if (this.deathOccured){
      fill(255);
      text("Press Space to continue", width/2, height/2);
      if (keyIsPressed(32)){
        this.lifes -= 1;
        this.health = 5;
        this.deathOccured = !this.deathOccured;
      }
    }

    // displaying the amount of lifes left
    if (this.lifes === 3) {
      fill(255);
      text("Lives",width - 20, 30);
      image(this.img, width- 20, 50, this.size*0.25, this.size*0.25);
      image(this.img, width- 20 - this.size*0.25, 50, this.size*0.25, this.size*0.25);
    }
    else if (this.lifes === 2) {
      fill(255);
      text("Lives",width - 20, 30);
      image(this.img, width- 20, 50, this.size*0.25, this.size*0.25);
    }
    else{
      fill(255);
      text("Lives",width - 20, 30);
    }
  }

  // moving the player
  movement() {
    if (keyIsDown(65)) {
      this.x -= this.dx;
    }
    if (keyIsDown(68)) {
      this.x += this.dx;
    }
    this.x = constrain(this.x,0 + this.size/2,width - this.size/2);
  }

  // creating new projectiles
  keyIsPressed(){
    if (key === 87){
      let playerProjectile = new Bullet();
    }
  }
}
