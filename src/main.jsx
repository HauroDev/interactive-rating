import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import RatingProvider from './contexts/rating.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </React.StrictMode>
);
