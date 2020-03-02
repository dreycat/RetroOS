import Character from './character';
import { Coords, Direction } from '../types';

export default class Player extends Character {
  private _dead: boolean;

  constructor(coords: Coords, public hearts = 3, public direction: Direction = 'down') {
    super(coords);
    this._dead = false;
  }

  damage() {
    if (this.hearts > 0) {
      this.hearts -= 1;
    }
    if (this.hearts === 0) {
      this._dead = true;
    }
  }

  get isDead() {
    return this._dead;
  }
}
