import { Coords } from '../types';

export default class Character {
  constructor(public coords: Coords) {}

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
