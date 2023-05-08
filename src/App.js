import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'Tv',
      amount: 800.12,
      date: new Date(2021, 5, 15)
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2022, 7, 30)
    },
    {
      id: 'e4',
      title: 'toys',
      amount: 29.30,
      date: new Date(2022, 9, 6)
    },

  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
