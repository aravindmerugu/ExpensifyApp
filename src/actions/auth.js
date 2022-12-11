import { signInWithPopup, googleAuthProvider,auth, signOut } from "../firebase/firebase"
import firebase from "../firebase/firebase"

export const login = (uid) => {
    // console.log(uid)
    return {
    type: 'LOGIN',
    userid : uid
    }
}

export const startLogin = () => {
    return () => {
        return signInWithPopup(auth,googleAuthProvider.setCustomParameters({
            'prompt': 'select_account'
        }))
    }
}

export const logout = (uid) => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return signOut(auth);
    }
}
