import { Map, Coords } from '../types';

export default class Painter {
  private readonly font =
    ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, ' +
    'Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

  private readonly colors = {
    0: '#0e0307',
    1: '#543933',
    K: '#ccc',
    D: '#FFDEAD',
    P: '#87CEFA	',
    B: '#FFA07A',
    G: 'gold'
  };

  constructor(private readonly ctx: CanvasRenderingContext2D) {}

  drawMap(map: Map) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[0].length; x++) {
        const cell = map[y][x];
        const color = this.colors[cell];
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * 32, y * 32, 32, 32);
      }
    }
  }

  drawPlayer({ x, y }: Coords) {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(x * 32, y * 32, 32, 32);
  }

  drawEnemy({ x, y }: Coords) {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(x * 32, y * 32, 32, 32);
  }

  drawFail() {
    this.ctx.font = `bold 72px ${this.font}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Fail', 256, 256);
  }

  drawStatusBar(keys: number, totalKeys: number, level: number, hearts: number) {
    this.ctx.font = `16px ${this.font}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'gold';
    this.ctx.fillText(`Keys: ${keys} / ${totalKeys}`, 66, 16);
    this.ctx.fillText(`Level: ${level}`, 260, 16);
    this.ctx.fillText(`Hears: ${hearts} / 3`, 442, 16);
  }
}
