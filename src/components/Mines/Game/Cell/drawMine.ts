export const drawMine = (ctx: CanvasRenderingContext2D, x: number, y: number, sellSize: number) => {
  const drawCircle = ({ radius = 1.25, fillStyle = '#a8a5a4', strokeStyle = '#000', lineWidth = 0.5 }) => {
    const cx = x * sellSize;
    const cy = y * sellSize;

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.arc(cx + 16, cy + 16, radius, 0, Math.PI * 2);
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  const drawTriangle = (moveTo: Point2D, dotOne: Point2D, dotTwo: Point2D) => {
    const cx = x * sellSize;
    const cy = y * sellSize;

    ctx.beginPath();
    ctx.lineJoin = 'round';
    ctx.moveTo(cx + moveTo.x, cy + moveTo.y);
    ctx.lineTo(cx + dotOne.x, cy + dotOne.y);
    ctx.lineTo(cx + dotTwo.x, cy + dotTwo.y);
    ctx.closePath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#a8a5a4';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  const drawLine = (moveTo: Point2D, lineTo: Point2D, lineWidth = 0.5) => {
    const cx = x * sellSize;
    const cy = y * sellSize;

    ctx.beginPath();
    ctx.moveTo(cx + moveTo.x, cy + moveTo.y);
    ctx.lineWidth = lineWidth;
    ctx.lineTo(cx + lineTo.x, cy + lineTo.y);
    ctx.stroke();
    ctx.closePath();
  };

  const drawBackground = () => {
    ctx.fillStyle = '#eb4e4e';
    ctx.fillRect(x * sellSize, y * sellSize, sellSize, sellSize);
  };

  drawBackground();

  drawCircle({ fillStyle: '#717272', radius: 6.25 });
  drawLine({ x: 22, y: 15.75 }, { x: 9.5, y: 15.75 });
  drawLine({ x: 15.75, y: 22 }, { x: 15.75, y: 9.5 });
  drawCircle({});

  drawTriangle({ x: 15.75, y: 7.875 }, { x: 16.75, y: 12.5 }, { x: 14.75, y: 12.5 });
  drawTriangle({ x: 15.75, y: 23.625 }, { x: 16.75, y: 19 }, { x: 14.75, y: 19 });
  drawTriangle({ x: 9.8125, y: 11.0625 }, { x: 11.0625, y: 14.25 }, { x: 12.875, y: 12.875 });
  drawTriangle({ x: 21.8125, y: 11.0625 }, { x: 20.0625, y: 14.25 }, { x: 18.5625, y: 12.875 });
  drawTriangle({ x: 11.625, y: 17.4375 }, { x: 13, y: 18.8125 }, { x: 9.625, y: 20.625 });
  drawTriangle({ x: 20, y: 17.4375 }, { x: 18.5625, y: 18.8125 }, { x: 21.8125, y: 20.625 });
  drawTriangle({ x: 7.875, y: 15.75 }, { x: 9.375, y: 15.25 }, { x: 9.375, y: 16.25 });
  drawTriangle({ x: 23.625, y: 15.75 }, { x: 22, y: 15.25 }, { x: 22, y: 16.25 });
};
