import { Map, Coords, Direction } from '../types';
import { Cell } from '../enums';

import sprite from './images/sprite.png';

export default class Painter {
  private readonly font =
    ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, ' +
    'Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

  private readonly colors = {
    0: '#0e0307',
    1: '#543933',
    K: '#543933',
    D: '#FFDEAD',
    P: '#87CEFA	',
    B: '#FFA07A',
    G: 'gold'
  };

  private readonly sprite: HTMLImageElement;

  constructor(private readonly ctx: CanvasRenderingContext2D) {
    this.sprite = new Image();
    this.sprite.src = sprite;
  }

  drawMap(map: Map) {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[0].length; x++) {
        const cell = map[y][x];
        const color = this.colors[cell];
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * 32, y * 32, 32, 32);
        if (cell === Cell.Wall) {
          this.drawWall({ x, y });
        }
        if (cell === Cell.Path) {
          this.drawPath({ x, y });
        }
        if (cell === Cell.Key) {
          this.drawKey({ x, y });
        }
        if (cell === Cell.Door) {
          this.drawDoor({ x, y });
        }
        if (cell === Cell.Portal) {
          this.drawPortal({ x, y });
        }
        if (cell === Cell.Box) {
          this.drawBox({ x, y });
        }
        if (cell === Cell.Gold) {
          this.drawGold({ x, y });
        }
      }
    }
  }

  drawBox({ x, y }: Coords) {
    this.drawPath({ x, y });
    this.ctx.drawImage(this.sprite, 256, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawGold({ x, y }: Coords) {
    this.drawPath({ x, y });
    this.ctx.drawImage(this.sprite, 288, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawPath({ x, y }: Coords) {
    this.ctx.drawImage(this.sprite, 128, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawWall({ x, y }: Coords) {
    this.ctx.drawImage(this.sprite, 96, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawKey({ x, y }: Coords) {
    this.drawPath({ x, y });
    this.ctx.drawImage(this.sprite, 224, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawDoor({ x, y }: Coords) {
    this.drawPath({ x, y });
    this.ctx.drawImage(this.sprite, 160, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawPortal({ x, y }: Coords) {
    this.drawPath({ x, y });
    this.ctx.drawImage(this.sprite, 192, 0, 32, 32, x * 32, y * 32, 32, 32);
  }

  drawPlayer({ x, y }: Coords) {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(x * 32, y * 32, 32, 32);
  }

  drawEnemy({ x, y }: Coords, direction: Direction) {
    if (direction === 'right') {
      this.ctx.drawImage(this.sprite, 32, 0, 32, 32, x * 32, y * 32, 32, 32);
    } else if (direction === 'left') {
      this.ctx.drawImage(this.sprite, 0, 0, 32, 32, x * 32, y * 32, 32, 32);
    } else if (direction === 'down' || direction === 'up') {
      this.ctx.drawImage(this.sprite, 64, 0, 32, 32, x * 32, y * 32, 32, 32);
    }
  }

  drawStatusBar(keys: number, totalKeys: number, level: number, hearts: number) {
    this.ctx.font = `16px ${this.font}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'gold';
    this.ctx.fillText(`Keys: ${keys} / ${totalKeys}`, 66, 16);
    this.ctx.fillText(`Level: ${level + 1}`, 260, 16);
    this.ctx.fillText(`Hears: ${hearts} / 3`, 442, 16);
  }
}
