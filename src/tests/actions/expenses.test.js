import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
}) 

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New Note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    })
})

test('should setup add expense action object', () => {
    const action = addExpense({description: '123abc', amount: 232, createdAt: 100, note: 'some note'})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            id: expect.any(String),
            description: '123abc',
            amount: 232,
            createdAt: 100,
            note: 'some note'
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount:0,
            createdAt:0,
            description:'',
            note:''
        }
    })
})