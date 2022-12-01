const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = (object) => {
    const min = 15;
    const max = Math.round(Math.random() * object.strength);
    const dragon = max > min ? max : min;
    return dragon;
  };

  const warriorDamage = (object) => {
    const min = object.strength;
    const max = Math.round(Math.random() * min * object.weaponDmg);
    const warrior = max > min ? max : min;
    return warrior;
  };

  const mageDamage = (object) => {
    const min = object.intelligence;
    const max = Math.round(Math.random() * min * 2);
    const mage = max > min ? max : min;
    const mageMana = object.mana;
    const mageDamageMana = {
        spentMana: 0,
        damage: 'Não possui mana suficiente',
    };
    if (mageMana > 15) {
      mageDamageMana.spentMana = 15;
      mageDamageMana.damage = mage;
      return mageDamageMana;
    }
    return mageDamageMana;
  };

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: (funct) => {
      warrior.damage = funct(warrior);
      dragon.healthPoints -= funct(warrior);
    },
    mageTurn: (funct) => {
      dragon.healthPoints -= funct(mage).damage;
      mage.damage = funct(mage).damage;
      mage.mana -= funct(mage).spentMana;
    },
    dragonTurn: (funct) => {
      mage.healthPoints -= funct(dragon);
      warrior.healthPoints -= funct(dragon);
      dragon.damage = funct(dragon);
    },
    newBattleMembers: () => battleMembers,
  };

  gameActions.warriorTurn(warriorDamage);
  gameActions.mageTurn(mageDamage);
  gameActions.dragonTurn(dragonDamage);
  console.log(gameActions.newBattleMembers());

console.log('teste');
