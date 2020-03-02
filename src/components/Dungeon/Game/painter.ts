import { Map, Direction, Square } from '../types';

import sprite from './images/sprite.png';

type Mapper = { [K in Square]: (x: number, y: number) => void };

export default class Painter {
  private readonly font =
    ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, ' +
    'Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';

  private readonly sprite: HTMLImageElement;
  private readonly mapper: Mapper;

  constructor(private readonly ctx: CanvasRenderingContext2D) {
    this.sprite = new Image();
    this.sprite.src = sprite;
    this.mapper = {
      0: this.drawWall,
      1: this.drawPath,
      K: this.drawKey,
      D: this.drawDoor,
      P: this.drawPortal,
      B: this.drawBox,
      G: this.drawGold
    };
  }

  drawCell = (x: number, y: number, sx: number) => {
    this.ctx.drawImage(this.sprite, sx, 0, 32, 32, x * 32, y * 32, 32, 32);
  };

  drawBox = (x: number, y: number) => {
    this.drawPath(x, y);
    this.drawCell(x, y, 256);
  };

  drawGold = (x: number, y: number) => {
    this.drawPath(x, y);
    this.drawCell(x, y, 288);
  };

  drawPath = (x: number, y: number) => {
    this.drawCell(x, y, 128);
  };

  drawWall = (x: number, y: number) => {
    this.drawCell(x, y, 320);
  };

  drawKey = (x: number, y: number) => {
    this.drawPath(x, y);
    this.drawCell(x, y, 224);
  };

  drawDoor = (x: number, y: number) => {
    this.drawPath(x, y);
    this.drawCell(x, y, 160);
  };

  drawPortal = (x: number, y: number) => {
    this.drawPath(x, y);
    this.drawCell(x, y, 192);
  };

  drawMap = (map: Map) => {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[0].length; x++) {
        const cell = map[y][x];
        this.mapper[cell](x, y);
      }
    }
  };

  drawPlayer = (x: number, y: number) => {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(x * 32, y * 32, 32, 32);
  };

  drawEnemy = (x: number, y: number, direction: Direction) => {
    if (direction === 'right') {
      this.drawCell(x, y, 32);
    } else if (direction === 'left') {
      this.drawCell(x, y, 0);
    } else if (direction === 'down') {
      this.drawCell(x, y, 64);
    } else if (direction === 'up') {
      this.drawCell(x, y, 96);
    }
  };

  drawStatusBar = (keys: number, totalKeys: number, level: number, hearts: number) => {
    this.ctx.font = `16px ${this.font}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'gold';
    this.ctx.fillText(`Keys: ${keys} / ${totalKeys}`, 66, 16);
    this.ctx.fillText(`Level: ${level + 1}`, 260, 16);
    this.ctx.fillText(`Hears: ${hearts} / 3`, 442, 16);
  };
}
