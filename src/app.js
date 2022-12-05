import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import ROUTES from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'react-dates/lib/css/_datepicker.css';
import firebase from './firebase/firebase';


const store = configureStore();
// console.log(store)

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
  <p>Loading...</p>
)
store.dispatch(startSetExpenses())
  root.render(
    <React.StrictMode>
    {jsx}
    </React.StrictMode>
  )