import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import ScrollProgressBar from './Component/ProgressBar';
import { ScrollToTop } from './Component/ScrollToTop'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <ScrollProgressBar/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
