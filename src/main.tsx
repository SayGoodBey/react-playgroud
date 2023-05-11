import React from 'react';
import ReactDOM from 'react-dom/client';

import RouterApp from '@/pages/router-practice/RouterApp.tsx';

// import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
);
