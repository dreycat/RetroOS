import { useState, useEffect, useCallback } from 'react';

type Coords = {
  top: number;
  left: number;
};

export default (defaultPosition: Coords, saveName: string) => {
  const [storeIconCoords, setCoords] = useState(defaultPosition);

  useEffect(() => {
    const raw = localStorage.getItem(`${saveName}Coords`);
    if (raw) {
      setCoords(JSON.parse(raw));
    }
  }, [saveName]);

  const saveIconPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(`${saveName}Coords`, JSON.stringify(coords));
    },
    [saveName]
  );

  return { storeIconCoords, saveIconPosition };
};
