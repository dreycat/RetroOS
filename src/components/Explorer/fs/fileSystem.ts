import { makeDir, makeFile } from './utils';

// prettier-ignore
const fileSystem = makeDir('/', [
  makeDir('home', [
    makeDir('user', [
      makeFile('todos.txt'),
      makeFile('cat.jpg')
    ])
  ]),
  makeDir('etc', [
      makeDir('nginx', [
      makeFile('main.conf')
    ]),
    makeFile('hosts')
  ]),
  makeDir('usr', [
    makeDir('bin', [
      makeFile('htop'),
      makeFile('gnome-shell'),
      makeFile('echo')
    ])
  ], {
    hidden: true
  })
]);

export default fileSystem;
