import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import ScrollProgressBar from './Component/ProgressBar';
import Preloader from './Component/Preloader';
import GoToTop from './Component/ScrollToTopButton';
import FeedbackButton from './Component/Feedbtn';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollProgressBar/>
    <FeedbackButton/>
    <Preloader />
    <GoToTop />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
