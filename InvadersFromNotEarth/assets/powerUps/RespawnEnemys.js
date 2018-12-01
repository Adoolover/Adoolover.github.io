// Travis Ahern
// Dec. 1, 2018

class RespawnEnemys {
  constructor() {
    this.img = img.respawnEnemys;
  }

  pickUp(playerObj) {
    playerObj.item = new RespawnEnemys;
    return playerObj;
  }

  useItem(enemyArr) {
    enemyArr.map(enemyBullet => enemyBullet.spawnEnemys());
  }
}
