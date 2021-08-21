import type { Direction } from '../types';

type Mapper = { [K in Direction]: (coords: Point2D) => Point2D };

const mapper: Mapper = {
  up: (coords: Point2D) => ({ ...coords, y: coords.y - 1 }),
  down: (coords: Point2D) => ({ ...coords, y: coords.y + 1 }),
  left: (coords: Point2D) => ({ ...coords, x: coords.x - 1 }),
  right: (coords: Point2D) => ({ ...coords, x: coords.x + 1 }),
};

export const getNextStep = (coords: Point2D, direction: Direction) => {
  return mapper[direction]?.(coords);
};
