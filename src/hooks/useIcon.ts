import { useState, useCallback, useMemo } from 'react';

import getStorageData from '../utils/getStarogeData';
import { Coords } from '../interfaces/coords';

export default (name: string, defaultPosition: Coords) => {
  const storageName = useMemo(() => `${name.toLowerCase()}_icon_coords`, [name]);
  const [storeIconCoords] = useState<Coords>(getStorageData(storageName, defaultPosition));

  const saveIconPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(storageName, JSON.stringify(coords));
    },
    [storageName]
  );

  return { storeIconCoords, saveIconPosition };
};
