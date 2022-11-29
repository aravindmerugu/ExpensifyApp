import React from 'react'
import {shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'
import HeaderPage from '../../components/HeaderPage'

test('should render Header correctly', () => {
    const wrapper = shallow(<HeaderPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

