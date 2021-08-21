import { Character } from './Character';
import { random } from '../../../utils/random';
import type { Direction } from '../types';

export class Enemy extends Character {
  private directions: Direction[];
  constructor(coords: Point2D, direction: Direction = 'left', public speed: number) {
    super(coords, direction);
    this.directions = ['down', 'left', 'right', 'up'];
  }

  changeDirection() {
    this.direction = this.directions[random(0, 4)];
  }

  move() {
    this[this.direction]?.();
  }
}
