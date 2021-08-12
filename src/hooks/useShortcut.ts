import { useState, useCallback, useMemo } from 'react';

import { getStorageData } from '../utils/getStorageData';
import { ICoords } from '../interfaces';
import { Apps } from '../types';

export const useShortcut = (name: Apps, defaultPosition: ICoords) => {
  const storageName = useMemo(() => `${name}_icon_coords`, [name]);
  const [storeShortcutCoords] = useState<ICoords>(() => getStorageData(storageName, defaultPosition));

  const saveShortcutPosition = useCallback(
    (coords: ICoords) => {
      localStorage.setItem(storageName, JSON.stringify(coords));
    },
    [storageName]
  );

  return { storeShortcutCoords, saveShortcutPosition };
};
