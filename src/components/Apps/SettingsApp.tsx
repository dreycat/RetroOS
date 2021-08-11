import { Settings } from '../Settings';
import { ContextApplication } from '../ContextApplication';
import { windowPositions } from './positions';

export const SettingsApp = () => (
  <ContextApplication name="settings" label="Settings" defaultWindowPosition={windowPositions.settings}>
    <Settings />
  </ContextApplication>
);
