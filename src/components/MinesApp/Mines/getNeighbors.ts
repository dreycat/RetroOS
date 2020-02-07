import { Field, Neighbor } from './types';

const getСell = (field: Field, y: number, x: number) => {
  return field[y] && field[y][x] !== undefined ? { y, x, value: field[y][x] } : null;
};

const getNeighbors = (field: Field, y: number, x: number) => {
  return [
    getСell(field, y, x + 1),
    getСell(field, y, x - 1),
    getСell(field, y - 1, x + 1),
    getСell(field, y - 1, x),
    getСell(field, y - 1, x - 1),
    getСell(field, y + 1, x + 1),
    getСell(field, y + 1, x),
    getСell(field, y + 1, x - 1)
  ].filter(cell => cell !== null) as Neighbor[];
};

export default getNeighbors;
