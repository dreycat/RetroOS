import type { Field, Neighbor } from './types';

const getCell = (field: Field, x: number, y: number) => {
  return field[y] && field[y][x] !== undefined ? { x, y, value: field[y][x] } : null;
};

export const getNeighbors = (field: Field, x: number, y: number) => {
  return [
    getCell(field, x, y + 1),
    getCell(field, x, y - 1),
    getCell(field, x + 1, y),
    getCell(field, x + 1, y + 1),
    getCell(field, x + 1, y - 1),
    getCell(field, x - 1, y),
    getCell(field, x - 1, y + 1),
    getCell(field, x - 1, y - 1),
  ].filter((cell) => cell !== null) as Neighbor[];
};
