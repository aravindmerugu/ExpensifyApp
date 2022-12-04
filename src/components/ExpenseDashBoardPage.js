import React from 'react';
import ExpenseList from './ExpensesList'
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from '../components/ExpenseSummary'

const ExpenseDashBoardPage = () => (
    <div>
    <ExpenseSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
  );

export default ExpenseDashBoardPage