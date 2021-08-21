import type { FC, SVGProps } from 'react';

import type { Meta, Extensions } from './fs/types';

import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as TextIcon } from './icons/text.svg';
import { ReactComponent as ImageIcon } from './icons/image.svg';
import { ReactComponent as VideoIcon } from './icons/avi.svg';
import { ReactComponent as UnknownIcon } from './icons/unknown.svg';
import styles from './Explorer.module.css';

interface FileProps {
  name: string;
  meta: Meta;
  openApp: (name: string, meta: Meta) => void;
}

type Icons = {
  [k in Extensions]: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const icons: Icons = {
  image: ImageIcon,
  bin: BinIcon,
  text: TextIcon,
  video: VideoIcon,
  unknown: UnknownIcon,
};

export const File: FC<FileProps> = ({ name, meta, openApp }) => {
  const Icon = icons[meta.extension ?? 'unknown'];

  return (
    <li>
      <button className={styles.file} onClick={() => openApp(name, meta)}>
        <Icon width={42} height={42} />
        <span className={styles.name} title={name}>
          {name}
        </span>
      </button>
    </li>
  );
};
