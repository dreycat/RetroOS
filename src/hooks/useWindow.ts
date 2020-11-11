import { useContext, useCallback } from 'react';

import { WindowsContext } from '../contexts/WindowsProvider';
import { Apps } from '../types';

export const useWindow = (name: Apps) => {
  const { state, dispatch } = useContext(WindowsContext);

  const isOpen = state[name] ?? false;

  const onOpen = useCallback(() => {
    dispatch({ type: 'open', payload: name });
  }, [dispatch, name]);

  const onClose = useCallback(() => {
    dispatch({ type: 'close', payload: name });
  }, [dispatch, name]);

  const toggle = useCallback(() => {
    dispatch({ type: 'toggle', payload: name });
  }, [dispatch, name]);

  return {
    isOpen,
    onOpen,
    onClose,
    toggle,
  };
};
