import { useState, useCallback, useMemo } from 'react';

import getStorageData from '../utils/getStarogeData';
import { ICoords } from '../interfaces';
import { Apps } from '../types';

export default (name: Apps, defaultPosition: ICoords) => {
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
