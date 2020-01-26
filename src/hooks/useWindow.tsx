import { useState, useEffect, useCallback } from 'react';

type Coords = {
  top: number;
  left: number;
};

export default (defaultPosition: Coords, saveName: string) => {
  const [isOpen, setOpen] = useState(() => {
    const raw = localStorage.getItem(`${saveName}IsOpen`);
    return raw ? JSON.parse(raw) : false;
  });
  const [storeWindowCoords, setCoords] = useState(defaultPosition);

  useEffect(() => {
    const raw = localStorage.getItem(`${saveName}Coords`);
    if (raw) {
      setCoords(JSON.parse(raw));
    }
  }, [isOpen, saveName]);

  useEffect(() => {
    localStorage.setItem(`${saveName}IsOpen`, JSON.stringify(isOpen));
  }, [isOpen, saveName]);

  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  const saveWindowPosition = useCallback(
    (coords: Coords) => {
      localStorage.setItem(`${saveName}Coords`, JSON.stringify(coords));
    },
    [saveName]
  );

  return {
    isOpen,
    storeWindowCoords,
    handleOpen,
    onClose,
    saveWindowPosition
  };
};
