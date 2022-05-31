import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static instanceCount = 0;

  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.instanceCount += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.instanceCount;
  }
}
