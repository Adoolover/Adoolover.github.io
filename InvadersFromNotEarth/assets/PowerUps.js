// Travis Ahern
// Nov. 30, 2018

class PowerUp {
  constructor(x, y, power, size) {
    // position
    this.x = x;
    this.y = y;

    // speed
    this.dx = random(-width*0.0005, width*0.0005);
    this.dy = random(height*0.005, height*0.010);

    // acceleration
    this.ay = 9.8 /100;

    // power up
    this.power = power;
    this.size = size*0.50;
  }

  display() {
    image(this.power.img, this.x, this.y, this.size, this.size);
  }

  move() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    // falling
    this.dy += this.ay;
  }

  pickUpPower(playerObj) {
    return this.power.pickUp(playerObj);
  }
}
