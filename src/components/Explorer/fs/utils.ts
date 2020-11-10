import { INode } from './interfaces';

const makeId = () => Math.trunc(Math.random() * 1e12);

export const makeDir = (name: string, childrens: INode[] = [], meta = {}): INode => ({
  id: makeId(),
  type: 'dir',
  name,
  childrens,
  meta,
});

export const makeFile = (name: string, meta = {}): INode => ({
  id: makeId(),
  type: 'file',
  name,
  meta,
});

export const isDir = (node: INode) => node?.type === 'dir';

export const isFile = (node: INode) => node?.type === 'file';

export const getChildrens = (node?: INode) => node?.childrens ?? [];

export const getNode = (fileSystem: INode, path: string[] = []): INode | undefined => {
  // @ts-ignore
  return path.reduce(
    // @ts-ignore
    (node, curr) => (isDir(node) ? getChildrens(node).find(({ name }) => name === curr) : node),
    fileSystem
  );
};
