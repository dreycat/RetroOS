import { Direction } from '../types';

export const getPlayerDirection = (code: string): Direction | null => {
  switch (code) {
    case 'ArrowUp':
    case 'KeyW':
      return 'up';

    case 'ArrowDown':
    case 'KeyS':
      return 'down';

    case 'ArrowLeft':
    case 'KeyA':
      return 'left';

    case 'ArrowRight':
    case 'KeyD':
      return 'right';

    default:
      return null;
  }
};
