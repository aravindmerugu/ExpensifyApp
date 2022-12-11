// // install -> import and use

import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage  from '../components/LoginPage';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const ROUTES = (history) => (
  <BrowserRouter history={history}>
    <div>
      <Routes>
        <Route path="/" element={<PublicRoute/>} exact={true} />
        <Route path='/dashboard' element={<PrivateRoute/>} />
        <Route path="/create" element={<AddExpensePage/>} />
        <Route path="/edit/:id" element={<EditExpensePage/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  
);

export default ROUTES

// reportWebVitals();