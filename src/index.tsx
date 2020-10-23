import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './css/destyle.css';
import './css/style.scss';

const rootEl = document.getElementById('root');

rootEl ? ReactDOM.render(<App />, rootEl) : false;
