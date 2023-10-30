import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
);
