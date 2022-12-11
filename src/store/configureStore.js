import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import expenseReducer from "../reducers/expenses"
import filtersReducer from "../reducers/filters"
import authReducer from "../reducers/authReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer,
            auth: authReducer
        }

),composeEnhancers(applyMiddleware(thunk))
        )
    return store
}
