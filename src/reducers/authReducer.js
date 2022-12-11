const authReducer= (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                userid: action.userid
            })
        case 'LOGOUT':
            return {}
        default:
            return state
    }
}

export default authReducer