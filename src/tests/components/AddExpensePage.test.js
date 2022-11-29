import React from "react";
import {shallow} from 'enzyme'
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses'

let onSubmit, wrapper;

beforeEach(() => {
    const onSubmit = jest.fn()
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit}/>)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit',() => {
    const onSubmit = jest.fn()
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(onSubmit).toHaveBeenCalledWith(expenses[1])
})