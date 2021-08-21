import { getNode, isDir } from './utils';
import type { Node } from './types';

export class FileRoute {
  private _path: string[] = [];

  constructor(private readonly _fileSystem: Node) {}

  up() {
    this._path = this._path.slice(0, -1);
  }

  goHome() {
    this._path = ['home', 'user'];
  }

  move(dirName: string) {
    this.path = [...this._path, dirName];
  }

  set path(path) {
    if (this._checkPath(path)) {
      this._path = path;
    }
  }

  get path() {
    return this._path;
  }

  _checkPath(path: string[]) {
    const node = getNode(this._fileSystem, path);
    if (!node) return false;
    return isDir(node);
  }
}
