// Travis Ahern
// Nov. 30, 2018

class ExtraLife {
  constructor() {
    this.img = img.playerOneSprite;
  }

  pickUp(playerObj) {
    playerObj.lives++;
    return playerObj;
  }
}
