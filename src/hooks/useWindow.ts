import { useState, useEffect, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';

export default (name: string) => {
  const [isOpen, setOpen] = useState<boolean>(getStorageData(`${name}_is_open`, false));

  useEffect(() => {
    localStorage.setItem(`${name}_is_open`, JSON.stringify(isOpen));
  }, [isOpen, name]);

  const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  return {
    isOpen,
    handleOpen,
    onClose
  };
};
