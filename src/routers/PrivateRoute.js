import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import HeaderPage from '../components/HeaderPage'
import { getAuth } from "firebase/auth";
import { redirect } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import Help from "../components/Help";


// export const auth = getAuth()


export const PrivateRoute =({
    isAuthenticated   
}) => {
    // console.log(isAuthenticated)
    if (isAuthenticated) {
        // console.log('dfs')
         return(
            <div>
            <HeaderPage/>
            <ExpenseDashBoardPage/>
            </div>
         )
    } else {
        return (<Navigate to='/'/>)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!(state)
})

export default connect(mapStateToProps)(PrivateRoute)