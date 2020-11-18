import React from 'react';

import Notepad from '../Notepad';
import ContextApplication from '../ContextApplication';

const defaultWindowPosition = { top: 150, left: 516 };

const NotepadApp = () => (
  <ContextApplication name="notepad" label="Notepad" defaultWindowPosition={defaultWindowPosition}>
    <Notepad />
  </ContextApplication>
);
export default NotepadApp;
