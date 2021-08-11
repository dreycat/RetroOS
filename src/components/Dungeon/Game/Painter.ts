import { Map, Direction, Square } from '../types';

import sprite from './images/sprite.png';

type Mapper = { [K in Square]: (x: number, y: number) => void };
type CharacterDriver = { [K in Direction]: (x: number, y: number) => void };

export class Painter {
  private readonly sprite: HTMLImageElement;
  private readonly mapper: Mapper;
  private readonly enemyDriver: CharacterDriver;
  private readonly playerDriver: CharacterDriver;

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
      G: this.drawGold,
    };
    this.enemyDriver = this.createCharacterDriver(32, 0, 64, 96);
    this.playerDriver = this.createCharacterDriver(448, 416, 352, 384);
  }

  createCharacterDriver = (right: number, left: number, down: number, up: number) => {
    return {
      right: (x: number, y: number) => this.drawCell(x, y, right),
      left: (x: number, y: number) => this.drawCell(x, y, left),
      down: (x: number, y: number) => this.drawCell(x, y, down),
      up: (x: number, y: number) => this.drawCell(x, y, up),
    };
  };

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
        this.mapper[cell]?.(x, y);
      }
    }
  };

  drawPlayer = (x: number, y: number, direction: Direction) => {
    this.playerDriver[direction]?.(x, y);
  };

  drawEnemy = (x: number, y: number, direction: Direction) => {
    this.enemyDriver[direction]?.(x, y);
  };

  drawStatusBar = (keys: number, totalKeys: number, level: number, lives: number) => {
    this.ctx.font = `16px "Roboto Mono", monospace`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'gold';
    this.ctx.fillText(`Keys: ${keys} / ${totalKeys}`, 66, 16);
    this.ctx.fillText(`Level: ${level + 1}`, 260, 16);
    this.ctx.fillText(`Lives: ${lives} / 3`, 442, 16);
  };
}
