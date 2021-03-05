import { makeDir, makeFile } from './utils';

// prettier-ignore
const fileSystem = makeDir('/', [
  makeDir('boot', [
    makeFile('kernel', {extension: 'bin'})
  ]),
  makeDir('home', [
    makeDir('user', [
      makeDir('Games', [
        makeFile('dungeon', {extension: 'bin'}),
        makeFile('mines', {extension: 'bin'}),
      ]),
      makeDir('Pictures', [
        makeFile('cat.jpg', {extension: 'image', link: '/images/cat.webp'}),
        makeFile('car.jpg', {extension: 'image', link: '/images/car.webp'}),
        makeFile('comp.jpg', {extension: 'image', link: '/images/comp.webp'}),
        makeFile('ferrari.jpg', {extension: 'image', link: '/images/ferrari.webp'}),
        makeFile('galaxy.jpg', {extension: 'image', link: '/images/galaxy.webp'}),
      ]),
      makeDir('Documents', [
        makeFile('author.txt', {extension: 'text'}),
      ]),
      makeDir('Videos', [
        makeFile('best.avi', {extension: 'video', link: 'https://www.youtube.com/embed/BfCgF10C58Q'}),
        makeFile('kungfu.avi', {extension: 'video', link: 'https://www.youtube.com/embed/ZTidn2dBYbY'}),
        makeFile('monkey.avi', {extension: 'video', link: 'https://www.youtube.com/embed/5W_wd9Qf0IE'}),
        makeFile('drive.avi', {extension: 'video', link: 'https://www.youtube.com/embed/Ek4IRwHBqyo'}),
        makeFile('space.avi', {extension: 'video', link: 'https://www.youtube.com/embed/WI4-HUn8dFc'}),
      ])
    ])
  ]),
  makeDir('bin', [
      makeFile('player', {extension: 'bin'}),
      makeFile('settings', {extension: 'bin'}),
      makeFile('console', {extension: 'bin'}),
      makeFile('todo', {extension: 'bin'}),
  ])
]);

export default fileSystem;
