export type Extensions = 'bin' | 'image' | 'text';

export type Meta = {
  extension?: Extensions;
  hidden?: boolean;
};

export interface INode {
  id: number;
  type: 'dir' | 'file';
  name: string;
  childrens?: INode[];
  meta: Meta;
}