import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0;

  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceCount += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.instanceCount;
  }
}
