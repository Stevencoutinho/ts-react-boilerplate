import React from 'react';
import { render } from 'react-dom';
import App from '@/src/components/App';
import '@/src/css/destyle.css';
import '@/src/css/style.scss';

const rootEl = document.getElementById('root');

rootEl ? render(<App />, rootEl) : false;
