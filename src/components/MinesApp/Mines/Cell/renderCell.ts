import { Cell } from '../enums';
import { drawFlag, drawNumber, drawOpenCell, drawSuspense, drawMine } from './painter';

const mapper = {
  [Cell.Flag]: drawFlag,
  [Cell.Mine]: drawMine,
  [Cell.Open]: drawOpenCell,
  [Cell.Suspense]: drawSuspense,
  default: () => {}
};

const renderCell = (ctx: CanvasRenderingContext2D, x: number, y: number, value: any, sellSize: number) => {
  if (typeof value === 'number') {
    drawNumber(ctx, x, y, value, sellSize);
  } else if (typeof value === 'string') {
    const handler = mapper[value as Cell] || mapper.default;
    handler(ctx, x, y, sellSize);
  }
};

export default renderCell;
