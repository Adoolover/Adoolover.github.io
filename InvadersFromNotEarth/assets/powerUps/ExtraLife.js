// Travis Ahern
// Nov. 30, 2018

class ExtraLife {
  constructor() {
    this.img = img.extraLife;
  }

  pickUp(playerObj) {
    playerObj.lives++;
    return playerObj;
  }
}
