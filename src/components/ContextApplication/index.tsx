import React, { FC, useContext, useCallback } from 'react';

import Window from '../Window';
import ApplicationErrorBoundary from '../ApplicationErrorBoundary';
import { OpenerContext, ContextApps } from '../../contexts/OpenerProvider';
import { ICoords } from '../../interfaces';

interface IProps {
  name: ContextApps;
  defaultWindowPosition: ICoords;
}

const ContextApplication: FC<IProps> = ({ name, defaultWindowPosition, children }) => {
  const { state, dispatch } = useContext(OpenerContext);

  const isOpen = state[name];
  const onClose = useCallback(() => {
    dispatch({ type: 'close', payload: name });
  }, [dispatch, name]);

  return (
    <Window name={name} isOpen={isOpen} onClose={onClose} defaultPosition={defaultWindowPosition}>
      <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
    </Window>
  );
};

export default ContextApplication;
