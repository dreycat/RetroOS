import Player from './player';
import Enemy from './enemy';
import Painter from './painter';
import levels from './levels';
import getPlayerDirection from './getPlayerDirection';
import opener from './opener';
import getNextStep from './getNextStep';
import deepClone from '../../../utils/deepClone';
import random from '../../../utils/random';
import { Direction, Map } from '../types';
import { Cell } from '../enums';

export default (ctx: CanvasRenderingContext2D, level: number, teleport: () => void, finishGame: () => void) => {
  const painter = new Painter(ctx);
  const player = new Player({ ...levels[level].player });
  const enemies = levels[level].enemies.map(
    ({ coords, direction, speed }) => new Enemy({ ...coords }, direction, speed)
  );
  const map: Map = deepClone(levels[level].map);
  const totalKeys = map.flat().reduce((accum: number, curr) => (curr === Cell.Key ? accum + 1 : accum), 0);
  let requestAnimationID: number;
  let keys = 0;

  const enemyController = (enemy: Enemy) => {
    const nextStep = getNextStep(enemy.coords, enemy.direction);
    const nextCell = map[nextStep.y][nextStep.x];

    if (nextCell === Cell.Wall || nextCell === Cell.Door) {
      enemy.changeDirection();
      return;
    }
    if (
      (nextStep.x === player.coords.x && nextStep.y === player.coords.y) ||
      (enemy.coords.x === player.coords.x && enemy.coords.y === player.coords.y)
    ) {
      player.damage();
    }
    if (random(0, 6) === 0) {
      enemy.changeDirection();
    }

    enemy.coords = { ...nextStep };
  };

  const playerController = (direction: Direction) => {
    const nextStep = getNextStep(player.coords, direction);
    const nextCell = map[nextStep.y][nextStep.x];

    if (nextCell === Cell.Wall) return;
    if (nextCell === Cell.Key) {
      keys += 1;
      map[nextStep.y][nextStep.x] = Cell.Path;
    }
    if (keys === totalKeys) {
      opener(map);
    }
    if (nextCell === Cell.Portal) {
      teleport();
      return;
    }
    if (nextCell === Cell.Gold) {
      console.log('final');
      return;
    }
    player.direction = direction;
    player.coords = { ...nextStep };
  };

  const keydownHandler = ({ code }: KeyboardEvent) => {
    const direction = getPlayerDirection(code);

    if (direction) {
      playerController(direction);
      return;
    }
    if (code === 'Escape') {
      finishGame();
      return;
    }
  };

  const render = () => {
    painter.drawMap(map);
    painter.drawStatusBar(keys, totalKeys, level, player.hearts);
    enemies.forEach(enemy => painter.drawEnemy(enemy.coords.x, enemy.coords.y, enemy.direction));

    if (player.isDead) {
      finishGame();
      return;
    }

    painter.drawPlayer(player.coords.x, player.coords.y, player.direction);
    requestAnimationID = requestAnimationFrame(render);
  };

  requestAnimationID = requestAnimationFrame(render);

  const enemyIDS = enemies.map(enemy => setInterval(() => enemyController(enemy), enemy.speed));
  document.addEventListener('keydown', keydownHandler);

  return () => {
    cancelAnimationFrame(requestAnimationID);
    enemyIDS.forEach(id => clearInterval(id));
    document.removeEventListener('keydown', keydownHandler);
  };
};
