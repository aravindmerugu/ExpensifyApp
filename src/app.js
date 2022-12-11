import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import ROUTES, {history} from './routers/AppRouter';
import firebase from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { login, logout } from './actions/auth';
import 'react-dates/lib/css/_datepicker.css';
import { getAuth } from "firebase/auth";
import { redirect, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LoadingPage from './components/LoadingPage';


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
  <LoadingPage/>
)


  getAuth().onAuthStateChanged((user)=> {
    // const navigate = useNavigate()
    if(user) {
      store.dispatch(login(user.uid))
      store.dispatch(startSetExpenses())
      root.render(
        <React.StrictMode>
        {jsx}
        </React.StrictMode>
      )
      if (window.location.pathname === '/') {
        return window.location.href = '/dashboard'
      }
    } else {
      root.render(
        <React.StrictMode>
        {jsx}
        </React.StrictMode>
      )
      console.log('log out')
      store.dispatch(logout())
      if (window.location.pathname !== '/') {
        return window.location.href = '/'
      }
    }
  })