import React, { FC, useReducer, createContext, useEffect, useMemo } from 'react';

import { getStorageData } from '../utils/getStorageData';
import { Apps } from '../types';

type State = Partial<{ [k in Apps]: string | null }>;

const initialState: State = {
  videoplayer: null,
  imageviewer: null,
};

const STORAGE_KEY = 'file_links';

type Action = { type: 'set'; payload: { name: Apps; link: string | null } };
type ContextProps = { state: State; dispatch: React.Dispatch<Action> };

const FileLinksContext = createContext({} as ContextProps);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'set':
      return { ...state, [action.payload.name]: action.payload.link };
    default:
      throw new Error('reducer: no matches');
  }
};

const init = (initialState: State) => getStorageData(STORAGE_KEY, initialState)();

const FileLinksProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <FileLinksContext.Provider value={value}>{children}</FileLinksContext.Provider>;
};

export { FileLinksContext };
export default FileLinksProvider;
