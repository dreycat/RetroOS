import React, { FC, useReducer, createContext, useEffect } from 'react';

import getStorageData from '../utils/getStarogeData';
import { Apps } from '../types';

const initialState = {
  audioplayer: false,
  console: false,
  mines: false,
  settings: false,
  todo: false
};

const STORAGE_KEY = 'opener_state';

type State = typeof initialState;
type Action = { type: 'open'; payload: Apps } | { type: 'close'; payload: Apps } | { type: 'toggle'; payload: Apps };
type ContextProps = { state: State; dispatch: React.Dispatch<Action> };

const OpenerContext = createContext({} as ContextProps);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'open':
      return { ...state, [action.payload]: true };
    case 'close':
      return { ...state, [action.payload]: false };
    case 'toggle':
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      throw new Error('reducer: no matches');
  }
};

const init = (initialState: State) => getStorageData(STORAGE_KEY, initialState)();

const OpenerProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return <OpenerContext.Provider value={{ state, dispatch }}>{children}</OpenerContext.Provider>;
};

export { OpenerContext };
export default OpenerProvider;
