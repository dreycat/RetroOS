const renderGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, sellSize: number) => {
  ctx.beginPath();
  ctx.strokeStyle = '#acb1c6';
  ctx.lineWidth = 0.5;
  for (let i = 0; i <= height; i += sellSize) {
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
  }
  for (let i = 0; i <= width; i += sellSize) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
  }
  ctx.stroke();
  ctx.closePath();
};

export default renderGrid;
