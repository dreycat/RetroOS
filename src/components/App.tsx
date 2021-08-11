import { Desktop } from './Desktop';
import { WindowsProvider } from '../contexts/WindowsProvider';
import { FileLinksProvider } from '../contexts/FileLinksProvider';
import { initTheme } from '../utils/themes';

export const App = () => {
  initTheme();
  return (
    <WindowsProvider>
      <FileLinksProvider>
        <Desktop />
      </FileLinksProvider>
    </WindowsProvider>
  );
};
