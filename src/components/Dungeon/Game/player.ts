import Character from './character';
import { Coords, Direction } from '../types';

export default class Player extends Character {
  private _dead: boolean;

  constructor(coords: Coords, public lives = 3, public direction: Direction = 'down') {
    super(coords);
    this._dead = false;
  }

  damage() {
    if (this.lives > 0) {
      this.lives -= 1;
    }
    if (this.lives === 0) {
      this._dead = true;
    }
  }

  get isDead() {
    return this._dead;
  }
}
