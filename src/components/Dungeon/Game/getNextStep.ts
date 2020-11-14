import { Direction, Coords } from '../types';

type Mapper = { [K in Direction]: (coords: Coords) => Coords };

const mapper: Mapper = {
  up: (coords: Coords) => ({ ...coords, y: coords.y - 1 }),
  down: (coords: Coords) => ({ ...coords, y: coords.y + 1 }),
  left: (coords: Coords) => ({ ...coords, x: coords.x - 1 }),
  right: (coords: Coords) => ({ ...coords, x: coords.x + 1 }),
};

export const getNextStep = (coords: Coords, direction: Direction) => {
  return mapper[direction]?.(coords);
};
