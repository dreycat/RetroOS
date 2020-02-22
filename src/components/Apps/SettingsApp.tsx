import React from 'react';

import ContextApplication from '../ContextApplication';
import Settings from '../Settings';

const SettingsApp = () => {
  const defaultWindowPosition = { top: 163, left: 716 };

  return (
    <ContextApplication name="settings" label="Settings" defaultWindowPosition={defaultWindowPosition}>
      <Settings />
    </ContextApplication>
  );
};

export default SettingsApp;
