import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import HeaderPage from './HeaderPage';

export class AddExpensePage extends React.Component {
  
  onSubmit=(expense) => {
    this.props.onSubmit(expense)
  }
  
  render() {
    return (
      <div>
      <HeaderPage/>
        <div className='page-header'>
          <div className='content-container'>
          <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
      <div className='content-container'>
      <ExpenseForm
      onSubmit={this.onSubmit}
      />
      </div> 
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
      // window.location.reload(false);
    }
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)