import moment from "moment"

export default [{
    id: '1',
    description: 'something',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1095,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Water',
    note: '',
    amount: 4095,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]