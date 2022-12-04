import React from "react";
import {connect} from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'


export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00')

    return (
        <div>
        <h1>Viewing {expenseCount} {expenseWord} totallling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary) 