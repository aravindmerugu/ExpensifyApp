import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => (
    <header>
    <h1>Expensify</h1>
    <ul>
    <li><NavLink end to="/" className={({ isActive }) => isActive ? 'is-active' : undefined }>Dashboard</NavLink></li>
    <li><NavLink end to="/create" className={({ isActive }) => isActive ? 'is-active' : undefined }>createpage</NavLink></li>
    <li><NavLink end to="/help" className={({ isActive }) => isActive ? 'is-active' : undefined }>help</NavLink></li>
    </ul>
    </header>
  )

export default HeaderPage