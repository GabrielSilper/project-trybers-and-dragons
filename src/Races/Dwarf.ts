import Race from './Races';

class Dwarf extends Race {
  static instances = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }
}

export default Dwarf;
