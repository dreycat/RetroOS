import { Map } from '../types';
import { Cell } from '../enums';

export const opener = (map: Map) => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      const cell = map[y][x];
      if (cell === Cell.Door) {
        map[y][x] = Cell.Portal;
      } else if (cell === Cell.Box) {
        map[y][x] = Cell.Gold;
      }
    }
  }
};
