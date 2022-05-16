import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import List from './components/Blog/List';
import Detail from './components/Product/Detail';
import Index from './components/Member/Index';
import { StrictMode } from 'react';
import Show from './components/Product/Show';
import Update from './components/Member/Update';
import Add from './components/Product/Add';
// import Index from './components/Member/Index'
ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
