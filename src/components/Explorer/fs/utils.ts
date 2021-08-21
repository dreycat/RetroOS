import type { Node, Meta } from './types';

const makeId = () => Math.trunc(Math.random() * 1e12);

export const makeDir = (name: string, children: Node[] = [], meta: Meta = {}): Node => ({
  id: makeId(),
  type: 'dir',
  name,
  children,
  meta,
});

export const makeFile = (name: string, meta: Meta): Node => ({
  id: makeId(),
  type: 'file',
  name,
  meta,
});

export const isDir = (node: Node) => node?.type === 'dir';

export const isFile = (node: Node) => node?.type === 'file';

export const getChildren = (node?: Node) => node?.children ?? [];

export const getNode = (fileSystem: Node, path: string[] = []): Node | undefined => {
  return path.reduce(
    (node, curr) => (node && isDir(node) ? getChildren(node).find(({ name }) => name === curr) : node),
    fileSystem as Node | undefined
  );
};
