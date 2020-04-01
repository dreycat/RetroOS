import React, { FC, useRef, useEffect } from 'react';

import main from './main';

const scale = window.devicePixelRatio || 2;
const width = 512;
const height = 512;

interface IProps {
  level: number;
  teleport: () => void;
  finishGame: () => void;
  win: () => void;
}

const Game: FC<IProps> = ({ level, teleport, finishGame, win }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    const ctx = canvas.current.getContext('2d') as CanvasRenderingContext2D;
    canvas.current.width = width * scale;
    canvas.current.height = height * scale;
    ctx.scale(scale, scale);

    const clear = main(ctx, level, teleport, finishGame, win);
    return () => clear();
  }, [level, teleport, finishGame, win]);

  return <canvas ref={canvas} style={{ width, height }} />;
};

export default Game;
