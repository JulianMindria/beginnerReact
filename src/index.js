import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './page/home';
import Signup from './page/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);


