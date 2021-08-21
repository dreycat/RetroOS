import { useReducer, createContext, useEffect, useMemo } from 'react';
import type { FC, Dispatch } from 'react';
import { getStorageData } from '../utils/getStorageData';

type State = { [k in Apps]: boolean };

const initialState: State = {
  explorer: false,
  audioplayer: false,
  console: false,
  mines: false,
  settings: false,
  todo: false,
  dungeon: false,
  screensaver: false,
  notepad: false,
  videoplayer: false,
  imageviewer: false,
};
const STORAGE_KEY = 'windows_state';

type Action = { type: 'open'; payload: Apps } | { type: 'close'; payload: Apps } | { type: 'toggle'; payload: Apps };
type ContextProps = { state: State; dispatch: Dispatch<Action> };

export const WindowsContext = createContext({} as ContextProps);

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

const init = (initialState: State) => getStorageData(STORAGE_KEY, initialState);

export const WindowsProvider: FC = ({ children }) => {
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

  return <WindowsContext.Provider value={value}>{children}</WindowsContext.Provider>;
};
