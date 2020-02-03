import { useState, useCallback, useMemo } from 'react';

import getStorageData from '../utils/getStarogeData';
import { ICoords } from '../interfaces';

export default (name: string, defaultPosition: ICoords) => {
  const storageName = useMemo(() => `${name.toLowerCase()}_icon_coords`, [name]);
  const [storeIconCoords] = useState<ICoords>(getStorageData(storageName, defaultPosition));

  const saveIconPosition = useCallback(
    (coords: ICoords) => {
      localStorage.setItem(storageName, JSON.stringify(coords));
    },
    [storageName]
  );

  return { storeIconCoords, saveIconPosition };
};
