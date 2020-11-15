import { makeDir, makeFile } from './utils';

// prettier-ignore
const fileSystem = makeDir('/', [
  makeDir('boot', [
    makeFile('kernel')
  ]),
  makeDir('home', [
    makeDir('user', [
      makeDir('Games', [
        makeFile('dungeon'),
        makeFile('mines'),
      ]),
      makeDir('Pictures', [
        makeFile('cat.jpg')
      ]),
      makeDir('Documents', [
        makeFile('todos.txt'),
      ]),
      makeDir('Videos')
    ])
  ]),
  makeDir('etc', [
    makeFile('hosts'),
  ]),
  makeDir('usr', [
    makeDir('bin', [
      makeFile('reset'),
      makeFile('screensaver'),
      makeFile('player'),
      makeFile('settings'),
      makeFile('console'),
      makeFile('todo'),
    ])
  ], {
    hidden: true
  })
]);

export default fileSystem;
