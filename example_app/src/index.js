import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//tutaj pobieramy znacznik html glowny / w reakcie jest tylko jeden na cala aplikacje czyli id ="root"
const getReactRootElement = document.getElementById('root');

const root = ReactDOM.createRoot(getReactRootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
