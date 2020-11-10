import random from '../../utils/random';

export const architect = (canvas: HTMLCanvasElement) => {
  const speed = 42;
  const fontSize = 14;
  const opacity = 0.07;
  const scale = window.devicePixelRatio || 2;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const letters = Array.from({ length: 97 }, (_, i) => String.fromCharCode(33 + i));
  let width = 0;
  let height = 0;
  let columns = 0;
  let rows: number[] = [];

  ctx.scale(scale, scale);

  const render = () => {
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.fillRect(0, 0, width, height);

    rows.forEach((row, i) => {
      const x = i * fontSize;
      const y = row * fontSize;
      const letter = letters[random(0, letters.length - 1)];

      ctx.fillStyle = '#6fffa8';
      ctx.fillText(letter, x, y);

      rows[i] += 1;

      if (random(0, 100) > 90 && height < y) {
        rows[i] = 0;
      }
    });
  };

  const init = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    rows = Array.from({ length: columns }, () => random(0, height / fontSize));
    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.font = `${fontSize}px monospace`;
  };

  init();

  window.addEventListener('resize', init, false);

  const id = setInterval(() => {
    render();
  }, speed);

  return () => {
    clearInterval(id);
    window.removeEventListener('resize', init, false);
  };
};
