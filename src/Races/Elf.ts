import Race from './Races';

class Elf extends Race {
  private static instances = 0;
  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints: number = 99,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
}

export default Elf;
