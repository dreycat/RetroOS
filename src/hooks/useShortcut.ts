import { useState } from 'react';

import { getStorageData } from '../utils/getStorageData';

export const useShortcut = (name: Apps, defaultPosition: Position) => {
  const storageName = `${name}_icon_coords`;
  const [storeShortcutCoords] = useState<Position>(() => getStorageData(storageName, defaultPosition));

  const saveShortcutPosition = (position: Position) => {
    localStorage.setItem(storageName, JSON.stringify(position));
  };

  return { storeShortcutCoords, saveShortcutPosition };
};
