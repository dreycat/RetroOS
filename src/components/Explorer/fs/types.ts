export type Extensions = 'bin' | 'image' | 'text' | 'video' | 'unknown';

export type Meta = {
  extension?: Extensions;
  hidden?: boolean;
  link?: string;
};

export interface Node {
  id: number;
  type: 'dir' | 'file';
  name: string;
  children?: Node[];
  meta: Meta;
}
