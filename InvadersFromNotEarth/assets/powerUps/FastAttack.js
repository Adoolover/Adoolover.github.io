// Travis Ahern
// Nov. 30, 2018

class FastAttack {
  constructor() {
    this.img = img.fastAttack;
  }

  pickUp(playerObj) {
    playerObj.timeDelay *= 0.90;
    playerObj.timeDelay = constrain(playerObj.timeDelay, 75, Infinity);
    return playerObj;
  }
}