import Character from './Character';
import { Direction, Coords } from '../types';
import { random } from '../../../utils/random';

export default class Enemy extends Character {
  private directions: Direction[];
  constructor(coords: Coords, direction: Direction = 'left', public speed: number) {
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
