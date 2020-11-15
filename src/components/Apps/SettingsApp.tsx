import React from 'react';

import Settings from '../Settings';
import ContextApplication from '../ContextApplication';

const defaultWindowPosition = { top: 163, left: 716 };

const SettingsApp = () => (
  <ContextApplication name="settings" label="Settings" defaultWindowPosition={defaultWindowPosition}>
    <Settings />
  </ContextApplication>
);
export default SettingsApp;
