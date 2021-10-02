import React,{useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    return (
        <form className="Form-container">
            <h2>Add Expense</h2>
            <div className="Form-date">Date</div>
            <input type="date" />
            <div className="Form-title">Title</div>
            <input type="text" />
            <div className="Form-amt">Amount</div>
            <input type="text" />
            <button className="Form-button" type='submit'>Submit</button>
        </form>
    )
}

export default ExpenseForm