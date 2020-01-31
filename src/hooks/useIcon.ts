import { useState, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';
import { Coords } from '../interfaces/coords';

export default (defaultPosition: Coords, saveName: string) => {
  const [storeIconCoords] = useState<Coords>(getStorageData(`${saveName}_coords`, defaultPosition));

  const saveIconPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(`${saveName}_coords`, JSON.stringify(coords));
    },
    [saveName]
  );

  return { storeIconCoords, saveIconPosition };
};
