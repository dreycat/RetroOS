import { useState, useCallback, useMemo } from 'react';

import { getStorageData } from '../utils/getStorageData';
import { ICoords } from '../interfaces';
import { Apps } from '../types';

export const useIcon = (name: Apps, defaultPosition: ICoords) => {
  const storageName = useMemo(() => `${name}_icon_coords`, [name]);
  const [storeIconCoords] = useState<ICoords>(getStorageData(storageName, defaultPosition));

  const saveIconPosition = useCallback(
    (coords: ICoords) => {
      localStorage.setItem(storageName, JSON.stringify(coords));
    },
    [storageName]
  );

  return { storeIconCoords, saveIconPosition };
};
