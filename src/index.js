import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./_base.scss";
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'
import store from "./redux/store";

ReactDOM.render(
 
    <React.StrictMode>
      <Provider store={store}>
          <Router>
             <App />
          </Router>
      </Provider> 
      
    </React.StrictMode>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
