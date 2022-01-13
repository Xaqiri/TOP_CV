import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './components/Info';
import Work from './components/Work';
import Education from './components/Education';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Info />
    <Work />
  </React.StrictMode>,
  document.getElementById('root')
);
