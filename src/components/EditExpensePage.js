import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    return (
      this.props.editExpense(this.props.expense.id, expense)
    )
  }

  onRemove = () => {
    return(
    this.props.removeExpense({id: this.props.expense.id})
    )
  }

  render() {
    return (
      <div>
      <ExpenseForm
      expense={this.props.expense}
      onSubmit = {this.onSubmit}
      />
        <button 
        onClick={this.onRemove}>Remove</button>
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  const params = {id: window.location.pathname.split("/")[2]}
  return {
    expense: state.expenses.find((expense) => {
      return (expense.id === params.id)
    })
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const navigate = useNavigate()
  return {
  editExpense: (id, expense) => {
    dispatch(editExpense(id, expense))
    navigate('/')
  },
  removeExpense: (data) => dispatch(removeExpense(data))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)