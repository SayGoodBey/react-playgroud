import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { create } from 'dva-core';

// import produce from 'immer';
// import RouterApp from '@/pages/router-practice/RouterApp.tsx';
import countModel from './models/count';
import personModel from './models/person';
import App from './App.tsx';

import './index.css';

// 在全局范围启用 immer 的自动 currying
// produce.setAutoFreeze(false);

const app = create();

// 注册 Dva model
app.model(countModel);
app.model(personModel);

// 启动 Dva
app.start();

const store = app._store;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
);
