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
            <ExpenseItem title={props.expensesT[0].title} amount={props.expensesT[0].amount} date={props.expensesT[0].date}></ExpenseItem>
            <ExpenseItem title={props.expensesT[1].title} amount={props.expensesT[1].amount} date={props.expensesT[1].date}></ExpenseItem>
            <ExpenseItem title={props.expensesT[2].title} amount={props.expensesT[2].amount} date={props.expensesT[2].date}></ExpenseItem>
            <ExpenseItem title={props.expensesT[3].title} amount={props.expensesT[3].amount} date={props.expensesT[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;