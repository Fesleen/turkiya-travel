import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  { store } from "./redux/store";
import { Provider } from 'react-redux';
import './i18next'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
</React.StrictMode>
);


