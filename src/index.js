import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './Redux/Store/Store';  // Unified the import as 'store'
import { ScrollToTop } from './Component/ScrollToTop'; // Imported ScrollToTop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />  // Included ScrollToTop component
      <App />
    </BrowserRouter>
  </Provider>
);
