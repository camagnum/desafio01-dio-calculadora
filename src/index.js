import React from 'react';
import App from './App';

import GlobalStyles from './global'

var ReactDOM = require('react-dom/client');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
