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
    normalDropChance += 0.5;
    normalDropChance = constrain(normalDropChance, 0, 51);
    hardMode = true;
    enemyArr.map(enemyBullet => enemyBullet.spawnEnemys());
  }
}
