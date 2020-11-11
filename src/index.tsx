import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './components/App';

import './styles/base.css';
import './styles/global.css';
import './styles/variables.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
