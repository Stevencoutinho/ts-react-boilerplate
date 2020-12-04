import React from 'react';
import { render } from 'react-dom';
import App from '@/src/App';
// import '@/src/css/destyle.css';
// import '@/src/css/style.scss';
import { StoreProvider } from './Store';

const rootEl = document.getElementById('root');

const Index: React.FC = ():JSX.Element => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

rootEl ? render(<Index />, rootEl) : false;
