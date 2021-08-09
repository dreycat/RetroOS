import { INode, Meta } from './types';

const makeId = () => Math.trunc(Math.random() * 1e12);

export const makeDir = (name: string, children: INode[] = [], meta: Meta = {}): INode => ({
  id: makeId(),
  type: 'dir',
  name,
  children,
  meta,
});

export const makeFile = (name: string, meta: Meta): INode => ({
  id: makeId(),
  type: 'file',
  name,
  meta,
});

export const isDir = (node: INode) => node?.type === 'dir';

export const isFile = (node: INode) => node?.type === 'file';

export const getChildren = (node?: INode) => node?.children ?? [];

export const getNode = (fileSystem: INode, path: string[] = []): INode | undefined => {
  // @ts-ignore
  return path.reduce(
    // @ts-ignore
    (node, curr) => (isDir(node) ? getChildren(node).find(({ name }) => name === curr) : node),
    fileSystem
  );
};
