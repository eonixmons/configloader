import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ConfigLoader from "./lib";
import ConfigsType from "./Types/ConfigsType";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ConfigLoader<ConfigsType> onConfigLoaded={loadedConfigs => new Promise(resolve => {
          setTimeout((configs) => {
              console.log('configs => ', configs)
              resolve();
          }, 2000, loadedConfigs)
      })}>
        <App />
      </ConfigLoader>
  </React.StrictMode>
)
