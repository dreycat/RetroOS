import Character from './character';
import { Direction, Coords } from '../types';
import random from '../../../utils/random';

export default class Bot extends Character {
  private directions: Direction[];
  constructor(coords: Coords, public direction: Direction = 'left', public speed: number) {
    super(coords);
    this.directions = ['down', 'left', 'right', 'up'];
  }

  changeDirection() {
    this.direction = this.directions[random(0, 4)];
  }

  move() {
    this[this.direction]();
  }
}
