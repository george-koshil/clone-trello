import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import index from './store'

ReactDOM.render(
    <Provider store={index}>
        <App />
    </Provider>
,
  document.getElementById('root')
);
