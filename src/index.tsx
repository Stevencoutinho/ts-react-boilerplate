import React from 'react';
import { render } from 'react-dom';
import App from '@/components/App';
import '@/css/destyle.css';
import '@/css/style.scss';

const rootEl = document.getElementById('root');

rootEl ? render(<App />, rootEl) : false;
