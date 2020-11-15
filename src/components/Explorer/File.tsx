import React, { FC } from 'react';

import { ReactComponent as BinIcon } from './icons/bin.svg';
import { ReactComponent as TextIcon } from './icons/text.svg';
import { ReactComponent as ImageIcon } from './icons/image.svg';
import { ReactComponent as UnknownIcon } from './icons/unknown.svg';
import styles from './Explorer.module.css';

import { Extensions } from './fs/types';

interface IProps {
  name: string;
  extension?: Extensions;
}

type Icons = {
  [k: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const icons: Icons = {
  image: ImageIcon,
  bin: BinIcon,
  text: TextIcon,
  unknown: UnknownIcon,
};

const File: FC<IProps> = ({ name, extension = 'unknown' }) => {
  const Icon = icons[extension];

  return (
    <li className={styles.file}>
      <Icon width={42} height={42} />
      <span className={styles.name} title={name}>
        {name}
      </span>
    </li>
  );
};

export default File;
