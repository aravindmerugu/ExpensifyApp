import React from "react";
import {shallow} from 'enzyme'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage'

test('should name ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow (<ExpenseDashBoardPage/>)
    expect(wrapper).toMatchSnapshot()
})