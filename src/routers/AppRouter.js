// // install -> import and use

import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HeaderPage from '../components/HeaderPage';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';

const ROUTES = () => (
  <BrowserRouter>
    <div>
    <HeaderPage/>
      <Routes>
        <Route path="/" element={<ExpenseDashBoardPage/>} exact={true} />
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