import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import axios from 'axios';

// set axios base url so that we dont have to in each axios request
axios.defaults.baseURL = 'http://localhost:5001';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
