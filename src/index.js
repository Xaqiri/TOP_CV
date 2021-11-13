import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './components/Info';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Info />
  </React.StrictMode>,
  document.getElementById('root')
);
