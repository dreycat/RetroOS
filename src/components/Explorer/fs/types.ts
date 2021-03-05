export type Extensions = 'bin' | 'image' | 'text' | 'video' | 'unknown';

export type Meta = {
  extension?: Extensions;
  hidden?: boolean;
  link?: string;
};

export interface INode {
  id: number;
  type: 'dir' | 'file';
  name: string;
  childrens?: INode[];
  meta: Meta;
}
