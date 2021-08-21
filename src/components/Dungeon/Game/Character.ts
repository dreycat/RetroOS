import type { Direction } from '../types';

export abstract class Character {
  constructor(public coords: Point2D, public direction: Direction) {}

  up() {
    if (this.coords.y > 0) {
      this.coords.y -= 1;
    }
  }

  down() {
    this.coords.y += 1;
  }

  left() {
    if (this.coords.x > 0) {
      this.coords.x -= 1;
    }
  }

  right() {
    this.coords.x += 1;
  }
}
