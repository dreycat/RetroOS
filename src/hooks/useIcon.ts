import { useState, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';
import { Coords } from '../interfaces/coords';

export default (defaultPosition: Coords, name: string) => {
  const [storeIconCoords] = useState<Coords>(getStorageData(`${name}_coords`, defaultPosition));

  const saveIconPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(`${name}_coords`, JSON.stringify(coords));
    },
    [name]
  );

  return { storeIconCoords, saveIconPosition };
};
