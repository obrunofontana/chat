import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
