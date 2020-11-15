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
        makeFile('todos.txt', {extension: 'text'}),
      ]),
      makeDir('Videos')
    ])
  ]),
  makeDir('etc', [
    makeFile('hosts', {extension: 'text'}),
  ]),
  makeDir('usr', [
    makeDir('bin', [
      makeFile('reset', {extension: 'bin'}),
      makeFile('screensaver', {extension: 'bin'}),
      makeFile('player', {extension: 'bin'}),
      makeFile('settings', {extension: 'bin'}),
      makeFile('console', {extension: 'bin'}),
      makeFile('todo', {extension: 'bin'}),
    ])
  ], {
    hidden: true
  })
]);

export default fileSystem;
