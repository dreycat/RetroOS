import { useState, useEffect, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';
import { Coords } from '../interfaces/coords';

export default (defaultPosition: Coords, saveName: string) => {
  const [isOpen, setOpen] = useState<boolean>(getStorageData(`${saveName}_is_open`, false));
  const [storeWindowCoords, setCoords] = useState<Coords>(getStorageData(`${saveName}_coords`, defaultPosition));

  useEffect(() => {
    localStorage.setItem(`${saveName}_is_open`, JSON.stringify(isOpen));
  }, [isOpen, saveName]);

  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  const saveWindowPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(`${saveName}_coords`, JSON.stringify(coords));
      setCoords(coords);
    },
    [saveName]
  );

  return {
    isOpen,
    handleOpen,
    onClose,
    storeWindowCoords,
    saveWindowPosition
  };
};
