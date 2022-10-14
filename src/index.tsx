import React from 'react';
import ReactDOM from 'react-dom/client';

/** 本地模块 */
import App from './components/MyCaculator';

/** 样式文件 */
import './styles/index.css';

/** 应用入口文件 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

