import Notepad from '../Notepad';
import ContextApplication from '../ContextApplication';
import { windowPositions } from './positions';

export const NotepadApp = () => (
  <ContextApplication name="notepad" label="Notepad" defaultWindowPosition={windowPositions.notepad}>
    <Notepad />
  </ContextApplication>
);
