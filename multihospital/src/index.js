import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { all_Reducers } from './Container/Reducers';
import thunk from 'redux-thunk';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(all_Reducers, applyMiddleware(thunk))
// const sagaMiddleware = createSagaMiddleware()
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
