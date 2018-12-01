// Travis Ahern
// Nov. 30, 2018

class PowerUp {
  constructor(x, y, power, size) {
    // position
    this.x = x;
    this.y = y;

    // speed
    this.dx = random(-width*0.0005, width*0.0005);
    this.dy = random(-height*0.006, -height*0.004);

    // acceleration
    this.ay = 9.8/100;

    // power up
    this.power = power;
    this.size = size*0.50;
    this.rotation = 0;
  }

  display() {
    // spinning
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.power.img, 0, 0, this.size, this.size);
    pop();

    this.rotation += 2+this.dy;
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

  hitEdge() {
    return this.y > height || this.x > width+this.size || this.x < -this.size;
  }
}
