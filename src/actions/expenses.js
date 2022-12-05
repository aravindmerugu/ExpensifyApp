import {v1 as uuid} from 'uuid'
import {database, db} from '../firebase/firebase'

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

export const editExpense = (id, updates) => (
   {
     type: 'EDIT_EXPENSE',
    id,
    updates
}
)