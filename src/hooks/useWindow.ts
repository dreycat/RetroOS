import { useState, useEffect, useCallback, useMemo } from 'react';

import getStorageData from '../utils/getStarogeData';

export default (name: string) => {
  const storageName = useMemo(() => `${name.toLowerCase()}_window_is_open`, [name]);
  const [isOpen, setOpen] = useState<boolean>(getStorageData(storageName, false));

  useEffect(() => {
    localStorage.setItem(storageName, JSON.stringify(isOpen));
  }, [isOpen, storageName]);

  const toggle = useCallback(() => setOpen(!isOpen), [isOpen]);
  const onClose = useCallback(() => setOpen(false), []);

  return {
    isOpen,
    toggle,
    onClose
  };
};
