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

    const filteredExpenses = props.expensesT.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No Expenses found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = (filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)))
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChnageHandler}></ExpensesFilter>
            {expensesContent}
        </Card>
    );
}

export default Expenses;