import React, { useState } from 'react';
import './Expenses.css';
// import '../UI/Card.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
    const [expenseYear, setExpenseYear] = useState('2022');


    const yearOfExpenseHandler = year => {
        console.log(year, 'year in Expenses');
        setExpenseYear(year)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={expenseYear} onFilteredYear={yearOfExpenseHandler} />
            {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>

    )
}
export default Expenses;