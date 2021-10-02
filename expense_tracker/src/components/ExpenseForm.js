import React,{useState} from 'react';
import './ExpenseForm.css';
export default ExpenseForm
function ExpenseForm() {
    const [title,setTitle] = useState("")
    const [amt,setAmt] = useState("")
    const [date,setDate] = useState("")
    function titleHandler(event) {
        setTitle(event.target.value)
    }
    function amtHandler(event) {
        setAmt(event.target.value)
    }
    function dateHandler(event) {
        setDate(event.target.value)
    }
    function onSubmitHandler(event){
        event.preventDefault()
        const Expenseobj = {
            title,
            amt,
            date : new Date(date)
        }
        console.log(Expenseobj)
    }
    return (
        <div className="container">
            <form className="Form-container" onSubmit={onSubmitHandler}>
            <h2>Add Expense</h2>
            <div className="Form-date">Date</div>
            <input type="date" onChange={dateHandler} />
            <div className="Form-title">Title</div>
            <input type="text" onChange={titleHandler}/>
            <div className="Form-amt">Amount</div>
            <input type="text" onChange={amtHandler}/>
            <button className="Form-button" type='submit'>Submit</button>
            </form>
        </div>
    )
}

