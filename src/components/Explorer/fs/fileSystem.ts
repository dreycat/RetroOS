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
        makeFile('cat.jpg', {extension: 'image'})
      ]),
      makeDir('Documents', [
        makeFile('author.txt', {extension: 'text'}),
      ]),
      makeDir('Videos', [
        makeFile('best.avi', {extension: 'video'}),
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
