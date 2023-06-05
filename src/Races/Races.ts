abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;
