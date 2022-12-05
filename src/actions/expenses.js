import {v1 as uuid} from 'uuid'
import {database, db} from '../firebase/firebase'


const pushRef = database.ref(db,'expenses')

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        const pushRef = database.ref(db,'expenses')

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
    return (dispatch) => {
        const removedData = database.ref(db,`expenses/${id}`)
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
    return (dispatch) => {
        const editDataDB = database.ref(db,`expenses/${id}`)
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
    return (dispatch) => {
       return database.onValue(pushRef, (snapshot) => {
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