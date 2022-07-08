import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ConfigLoader, { useConfig } from '../lib';

type AppConfig = {
  test: string;
};

export const useAppConfig = () => useConfig<AppConfig>();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigLoader
      onConfigLoaded={(loadedConfigs) =>
        new Promise((resolve) => {
          setTimeout(
            (configs) => {
              console.log('configs => ', configs);
              resolve();
            },
            2000,
            loadedConfigs
          );
        })
      }
    >
      <App />
    </ConfigLoader>
  </React.StrictMode>
);
