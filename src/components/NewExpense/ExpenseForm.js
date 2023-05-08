import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, seteneteredAmount] = useState('');
    const [enteredDate, seteneteredDate] = useState('');

    //Object use case
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     eneteredAmount: '',
    //     eneteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
        //Object use case
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    };

    const amountChangeHandler = (event) => {
        seteneteredAmount(event.target.value);
        console.log(event.target.value);
        //Object use case
        // setUserInput((prevState) => {
        //     return { ...prevState, eneteredAmount: event.target.value }
        // })

    }
    const dateChangeHandler = (event) => {
        seteneteredDate(event.target.value);
        console.log(event.target.value);

        //Object use case
        // setUserInput((prevState) => {
        //     return { ...prevState, eneteredDate: event.target.value }
        // })

    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        seteneteredDate('');
        seteneteredAmount('');
        setEnteredTitle('');

    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="01-01-2019" max="31-12-2023" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;