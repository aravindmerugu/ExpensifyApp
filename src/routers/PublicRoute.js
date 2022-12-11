import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";


export const PublicRoute =({
    isAuthenticated   
}) => {
    // console.log(isAuthenticated)
    if (isAuthenticated) {
        // console.log('dfs')
         return <Navigate to='/dashboard'/>
    } else {
        return <LoginPage/>
    }
}

const mapStateToProps = (getState) => ({
    isAuthenticated: !!(getState.auth.userid)
})

export default connect(mapStateToProps)(PublicRoute)