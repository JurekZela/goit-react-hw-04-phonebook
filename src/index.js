import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App/App.jsx';
import { GlobalStyled } from './GlobalStyled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <GlobalStyled />
    </BrowserRouter>
  </React.StrictMode>
);
