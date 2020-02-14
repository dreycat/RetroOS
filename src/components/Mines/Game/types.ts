export type Row = (number | string)[];

export type Field = Row[];

export type Neighbor = {
  x: number;
  y: number;
  value: string | number;
};
