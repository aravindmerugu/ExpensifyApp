import {v1 as uuid} from 'uuid'
import {database, db} from '../firebase/firebase'
import { auth } from '../firebase/firebase'
import { connect } from 'react-redux'

const pushRef = database.ref(db,'expenses')

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        // console.log(auth.currentUser)
        const userid = auth.currentUser.uid
        const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        const pushRef = database.ref(db,`users/${userid}/expenses`)

        database.push(pushRef,expense).then((pushRef)=> {
            dispatch(addExpense({
                id: pushRef.key,
                ...expense
            }))
        })

    }
}

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id}) => {
    return (dispatch, getState) => {
        console.log(getState())
        const removedData = database.ref(db,`users/${getState().auth.userid}/expenses/${id}`)
        return database.remove(removedData).then(()=>{
            // console.log(removedData)
            dispatch(removeExpense({id}))
        })
    }
}


export const editExpense = (id, updates) => (
   {
     type: 'EDIT_EXPENSE',
    id,
    updates
}
)

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        // console.log(getState())
        const editDataDB = database.ref(db,`users/${getState().auth.userid}/expenses/${id}`)
        return database.update(editDataDB,updates).then(()=>{
            // console.log(editDataDB)
            dispatch(editExpense(id, updates))
        })
    }
}

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        // let uid = auth.currentUser.uid
        // console.log(getState)
        const pushRef = database.ref(db,`users/${getState().auth.userid}/expenses`)
       return database.onValue(pushRef, 
        (snapshot) => {
        console.log(pushRef)
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
          })
    }
}
