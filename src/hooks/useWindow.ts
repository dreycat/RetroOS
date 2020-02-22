import { useContext, useCallback } from 'react';

import { OpenerContext } from '../contexts/OpenerProvider';

import { Apps } from '../types';

export default (name: Apps) => {
  const { state, dispatch } = useContext(OpenerContext);

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
    toggle
  };
};
