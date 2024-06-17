import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import { ScrollToTop } from './Component/ScrollToTop'
import CustomCursor from './Component/CustomCursor/CustomCursor.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CustomCursor/>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
