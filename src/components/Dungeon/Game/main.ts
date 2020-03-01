import Player from './player';
import Bot from './bot';
import Painter from './painter';
import levels from './levels';

import deepClone from '../../../utils/deepClone';
import random from '../../../utils/random';
import { Direction, Coords, Map } from '../types';
import { Cell } from '../enums';

export default (ctx: CanvasRenderingContext2D, level: number, teleport: () => void, setFail: () => void) => {
  const painter = new Painter(ctx);
  const player = new Player({ ...levels[level].player });
  const bots = levels[level].enemies.map(({ coords, direction, speed }) => new Bot({ ...coords }, direction, speed));
  const map: Map = deepClone(levels[level].map);
  const totalKeys = map.flat().reduce((accum: number, curr) => (curr === Cell.Key ? accum + 1 : accum), 0);
  let keys = 0;

  let requestID: number;

  const mapper = {
    up: (coords: Coords) => ({ ...coords, y: coords.y - 1 }),
    down: (coords: Coords) => ({ ...coords, y: coords.y + 1 }),
    left: (coords: Coords) => ({ ...coords, x: coords.x - 1 }),
    right: (coords: Coords) => ({ ...coords, x: coords.x + 1 })
  };

  const getNextStep = (coords: Coords, direction: Direction) => {
    return mapper[direction](coords);
  };

  const openPortal = () => {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[0].length; x++) {
        if (map[y][x] === Cell.Door) {
          map[y][x] = Cell.Portal;
        }
      }
    }
  };

  const driver = (direction: Direction) => {
    const nextStep = getNextStep(player.coords, direction);
    const nextCell = map[nextStep.y][nextStep.x];
    if (nextCell === Cell.Wall) return;
    if (nextCell === Cell.Key) {
      keys += 1;
      map[nextStep.y][nextStep.x] = Cell.Path;
    }
    if (keys === totalKeys) {
      openPortal();
    }
    if (nextCell === Cell.Portal) {
      teleport();
      return;
    }
    player.coords = { ...nextStep };
  };

  const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

  const keydownHandler = ({ code }: KeyboardEvent) => {
    if (!arrows.includes(code)) return;
    driver(code.slice(5).toLowerCase() as Direction);
  };

  const botControl = (bot: Bot) => {
    const nextStep = getNextStep(bot.coords, bot.direction);
    const nextCell = map[nextStep.y][nextStep.x];
    if (nextCell === Cell.Wall || nextCell === Cell.Door) {
      bot.changeDirection();
      return;
    }

    if (
      (nextStep.x === player.coords.x && nextStep.y === player.coords.y) ||
      (bot.coords.x === player.coords.x && bot.coords.y === player.coords.y)
    ) {
      player.damage();
    }
    if (random(0, 6) === 0) {
      bot.changeDirection();
    }
    bot.coords = { ...nextStep };
  };

  const botIDS = bots.map(bot => {
    return setInterval(() => botControl(bot), bot.speed);
  });

  document.addEventListener('keydown', keydownHandler);

  const render = () => {
    painter.drawMap(map);
    painter.drawStatusBar(keys, totalKeys, level, player.hearts);

    bots.forEach(bot => painter.drawBot(bot.coords));

    if (player.isDead) {
      painter.drawFail();
      setFail();
      return;
    }
    painter.drawPlayer(player.coords);
    requestID = requestAnimationFrame(render);
  };

  requestID = requestAnimationFrame(render);

  return () => {
    botIDS.forEach(id => clearInterval(id));
    document.removeEventListener('keydown', keydownHandler);
    cancelAnimationFrame(requestID);
  };
};
