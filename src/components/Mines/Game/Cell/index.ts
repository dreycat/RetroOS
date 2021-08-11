import { drawFlag, drawNumber, drawOpenCell, drawSuspense } from './painter';
import { drawMine } from './drawMine';

import { Cell } from '../enums';

const mapper = {
  [Cell.Flag]: drawFlag,
  [Cell.Mine]: drawMine,
  [Cell.Open]: drawOpenCell,
  [Cell.Suspense]: drawSuspense,
  default: () => {},
};

export const renderCell = (ctx: CanvasRenderingContext2D, x: number, y: number, value: any, sellSize: number) => {
  if (typeof value === 'number') {
    drawNumber(ctx, x, y, value, sellSize);
  } else if (typeof value === 'string') {
    const handler = mapper[value as Cell] || mapper.default;
    handler(ctx, x, y, sellSize);
  }
};
