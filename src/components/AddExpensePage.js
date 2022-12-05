import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export class AddExpensePage extends React.Component {
  
  onSubmit=(expense) => {
    this.props.onSubmit(expense)
  }
  
  render() {
    return (
      <div>
      <h1>Add Expense</h1>
      <ExpenseForm
      onSubmit={this.onSubmit}
      />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const navigate = useNavigate()
  return {
    onSubmit: (expense) => {
      dispatch(startAddExpense(expense))
      navigate('/')
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)