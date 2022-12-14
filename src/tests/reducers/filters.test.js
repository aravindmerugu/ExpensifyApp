import moment from "moment";
import filtersReducer from "../../reducers/filters";


test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBY to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')

})

test('should set sortBY to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'this is my filter'
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    expect(state.text).toBe(text)
})

test('should set start date filter', () => {
    const date = moment()
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date});
    expect(state.startDate).toEqual(date)
})

test('should set end date filter', () => {
    const date = moment()
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date});
    expect(state.endDate).toEqual(date)
})
