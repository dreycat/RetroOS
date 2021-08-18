const colors = ['#fdf6e3', '#ddfac3', '#ecedbf', '#eddab4', '#edc38a', '#eda98a', '#ed8a8a', '#f16a6a', '#e45252'];
const font =
  '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, ' +
  'Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

export const drawNumber = (ctx: CanvasRenderingContext2D, x: number, y: number, value: any, sellSize: number) => {
  const cx = x * sellSize;
  const cy = y * sellSize;

  if (value === 0) {
    ctx.fillStyle = colors[0];
    ctx.fillRect(cx, cy, sellSize, sellSize);
  } else {
    ctx.fillStyle = colors[value];
    ctx.fillRect(cx, cy, sellSize, sellSize);
    ctx.fillStyle = '#000';
    ctx.font = font;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${value}`, cx + 16, cy + 17);
  }
};

export const drawFlag = (ctx: CanvasRenderingContext2D, x: number, y: number, sellSize: number) => {
  const cx = x * sellSize;
  const cy = y * sellSize;

  ctx.fillStyle = '#eceff1';
  ctx.fillRect(cx, cy, sellSize, sellSize);
  ctx.fillStyle = '#353535';
  ctx.fillRect(cx + 15, cy + 8, 2, 12);
  ctx.fillRect(cx + 12, cy + 20, 8, 2);

  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(cx + 16, cy + 8);
  ctx.lineTo(cx + 23, cy + 12);
  ctx.lineTo(cx + 16, cy + 16);
  ctx.fill();
  ctx.closePath();
};

export const drawSuspense = (ctx: CanvasRenderingContext2D, x: number, y: number, sellSize: number) => {
  ctx.fillStyle = '#eceff1';
  ctx.fillRect(x * sellSize, y * sellSize, sellSize, sellSize);
};

export const drawOpenCell = (ctx: CanvasRenderingContext2D, x: number, y: number, sellSize: number) => {
  ctx.clearRect(x * sellSize, y * sellSize, sellSize, sellSize);
};

export const drawMine = (ctx: CanvasRenderingContext2D, x: number, y: number, sellSize: number) => {
  ctx.fillStyle = 'red';
  ctx.fillRect(x * sellSize, y * sellSize, sellSize, sellSize);
};
