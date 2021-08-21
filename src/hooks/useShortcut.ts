import { useState, useCallback, useMemo } from 'react';

import { getStorageData } from '../utils/getStorageData';

export const useShortcut = (name: Apps, defaultPosition: Position) => {
  const storageName = useMemo(() => `${name}_icon_coords`, [name]);
  const [storeShortcutCoords] = useState<Position>(() => getStorageData(storageName, defaultPosition));

  const saveShortcutPosition = useCallback(
    (position: Position) => {
      localStorage.setItem(storageName, JSON.stringify(position));
    },
    [storageName]
  );

  return { storeShortcutCoords, saveShortcutPosition };
};
