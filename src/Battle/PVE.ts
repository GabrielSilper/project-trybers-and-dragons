import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private _monsters: SimpleFighter[]) {
    super(player);
  }

  private attackAllMonsters() {
    this._monsters.forEach((monster) => this.player.attack(monster));
  }

  private attackPlayer() {
    this._monsters.forEach((monster) => {
      if (monster.lifePoints > 0) {
        monster.attack(this.player);
      }
    });
  }

  private isKeepFighting(): boolean {
    const isMonstersAlive = this._monsters.reduce((acc, char) =>
      acc + char.lifePoints, 0) > 0;
    const isPlayerAlive = this.player.lifePoints > 0;
    return isMonstersAlive && isPlayerAlive;
  }

  fight(): number {
    this.attackAllMonsters();
    this.attackPlayer();
    if (this.isKeepFighting()) {
      this.fight();
    }
    return super.fight();
  }
}

export default PVE;
