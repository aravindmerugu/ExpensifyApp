import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import ROUTES from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

console.log(store.getState())


store.dispatch(addExpense({description:'rent', note:'this is for rent', amount:6700, createdAt: 120}))
store.dispatch(addExpense({description:'Water bill', note:'this is for water bill', amount:1700, createdAt: 220}))
store.dispatch(addExpense({description:'gas bill', note:'this is for gas bill', amount:2600, createdAt: -20}))
// store.dispatch(setTextFilter('rent'))

// setTimeout(()=> {
//   store.dispatch(setTextFilter('water'))
// },3000)

const jsx = (
  <Provider store={store}>
  <ROUTES/>
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById("App"));
root.render(
  <React.StrictMode>
  {jsx}
  </React.StrictMode>
);