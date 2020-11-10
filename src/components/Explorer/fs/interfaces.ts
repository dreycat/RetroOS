export interface INode {
  id: number;
  type: 'dir' | 'file';
  name: string;
  childrens?: INode[];
  meta: {};
}
