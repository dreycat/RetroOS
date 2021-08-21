import { Character } from './Character';
import type { Direction } from '../types';

export class Player extends Character {
  private _dead: boolean;

  constructor(coords: Point2D, direction: Direction = 'down', public lives = 3) {
    super(coords, direction);
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
