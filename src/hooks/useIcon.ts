import { useState, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';

type Coords = {
  top: number;
  left: number;
};

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
