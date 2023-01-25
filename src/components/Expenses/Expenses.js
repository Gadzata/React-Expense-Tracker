import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.js'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChnageHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChnageHandler}></ExpensesFilter>
            {props.expensesT.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}
        </Card>
    );
}

export default Expenses;