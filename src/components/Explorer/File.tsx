import React, { FC } from 'react';

import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as TextIcon } from './icons/text.svg';
import { ReactComponent as ImageIcon } from './icons/image.svg';
import { ReactComponent as VideoIcon } from './icons/avi.svg';
import { ReactComponent as UnknownIcon } from './icons/unknown.svg';
import styles from './Explorer.module.css';

import { Meta, Extensions } from './fs/types';

interface IProps {
  name: string;
  meta: Meta;
  openApp: (name: string, meta: Meta) => void;
}

type Icons = {
  [k in Extensions]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
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

const File: FC<IProps> = ({ name, meta, openApp }) => {
  const Icon = icons[meta.extension ?? 'unknown'];

  return (
    <li className={styles.file} onClick={() => openApp(name, meta)}>
      <Icon width={42} height={42} />
      <span className={styles.name} title={name}>
        {name}
      </span>
    </li>
  );
};

export default File;
