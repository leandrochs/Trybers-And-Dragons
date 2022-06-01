import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _player2: Fighter;
  protected _player1: Fighter;

  constructor(protected player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    return super.fight();
  }
}
