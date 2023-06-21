/*
 * @Description: 
 * @Author: xuguang
 * @Date: 2023-03-31 19:26:09
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import history from './history';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter><App /></BrowserRouter>
);
