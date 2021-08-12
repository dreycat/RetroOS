import type { FC, ReactNode } from 'react';

import Window from '../Window';
import { Shortcut } from '../Shortcut';
import { useWindow } from '../../hooks/useWindow';
import { useShortcut } from '../../hooks/useShortcut';
import { ApplicationErrorBoundary } from '../ApplicationErrorBoundary';
import { ICoords } from '../../interfaces';
import { Apps } from '../../types';

interface IProps {
  name: Apps;
  label: string;
  icon: ReactNode;
  defaultWindowPosition: ICoords;
  defaultShortcutPosition: ICoords;
}

export const Application: FC<IProps> = ({
  name,
  label,
  icon,
  defaultWindowPosition,
  defaultShortcutPosition,
  children,
}) => {
  const { isOpen, toggle, onClose } = useWindow(name);
  const { storeShortcutCoords, saveShortcutPosition } = useShortcut(name, defaultShortcutPosition);

  return (
    <>
      <Window isOpen={isOpen} name={name} label={label} onClose={onClose} defaultPosition={defaultWindowPosition}>
        <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
      </Window>
      <Shortcut
        label={label}
        top={storeShortcutCoords.top}
        left={storeShortcutCoords.left}
        toggle={toggle}
        saveShortcutPosition={saveShortcutPosition}
      >
        {icon}
      </Shortcut>
    </>
  );
};
