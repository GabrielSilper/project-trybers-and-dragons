import Race from './Races';

class Halfling extends Race {
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }
}

export default Halfling;
