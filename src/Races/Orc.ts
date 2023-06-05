import Race from './Races';

class Orc extends Race {
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
}

export default Orc;
