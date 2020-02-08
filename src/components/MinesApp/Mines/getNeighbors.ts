import { Field, Neighbor } from './types';

const getСell = (field: Field, x: number, y: number) => {
  return field[y] && field[y][x] !== undefined ? { x, y, value: field[y][x] } : null;
};

const getNeighbors = (field: Field, x: number, y: number) => {
  return [
    getСell(field, x, y + 1),
    getСell(field, x, y - 1),
    getСell(field, x + 1, y),
    getСell(field, x + 1, y + 1),
    getСell(field, x + 1, y - 1),
    getСell(field, x - 1, y),
    getСell(field, x - 1, y + 1),
    getСell(field, x - 1, y - 1)
  ].filter(cell => cell !== null) as Neighbor[];
};

export default getNeighbors;
