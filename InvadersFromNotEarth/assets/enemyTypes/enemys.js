// Travis Ahern
// Dec. 3, 2018

function setEnemyTypes() {
  // Boss
  enemyTypes.boss = {
    sprite: img.bossEnemySprite,
    size: spriteSize.enemy*3,
    bulletSize: spriteSize.enemy*1.5,
    dxMultiplier: 0.5,
    dyMultiplier: 0.1,
    attackMultiplier: 2,
    hp: 20,
    scoreGained: 10
  };

  // Common
  enemyTypes.common = {
    sprite: img.commonEnemySprite,
    size: spriteSize.enemy,
    bulletSize: spriteSize.enemy,
    dxMultiplier: 1,
    dyMultiplier: 1,
    attackMultiplier: 10,
    hp: 1,
    scoreGained: 1
  };

  // Fast
  enemyTypes.fast = {
    sprite: img.fastEnemySprite,
    size: spriteSize.enemy,
    bulletSize: spriteSize.enemy,
    dxMultiplier: 3,
    dyMultiplier: 1,
    attackMultiplier: 5,
    hp: 1,
    scoreGained: 2
  };

  // Strong
  enemyTypes.strong = {
    sprite: img.strongEnemySprite,
    size: spriteSize.enemy*1.25,
    bulletSize: spriteSize.enemy*1.2,
    dxMultiplier: 0.5,
    dyMultiplier: 0.5,
    attackMultiplier: 7.5,
    hp: 3,
    scoreGained: 3
  };

  // Super Strong
  enemyTypes.superStrong = {
    sprite: img.strongEnemySprite,
    size: spriteSize.enemy*2,
    bulletSize: spriteSize.enemy*1.5,
    dxMultiplier: 1.5,
    dyMultiplier: 1,
    attackMultiplier: 7,
    hp: 5,
    scoreGained: 7
  };

  // Slow
  enemyTypes.slow = {
    sprite: img.strongEnemySprite,
    size: spriteSize.enemy*0.25,
    bulletSize: spriteSize.enemy*0.5,
    dxMultiplier: 2.5,
    dyMultiplier: 0.001,
    attackMultiplier: 3.5,
    hp: 1,
    scoreGained: 5
  };
}
