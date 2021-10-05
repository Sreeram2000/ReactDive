import React,{useState} from 'react';
import './ExpenseForm.css';
import Expenses from './Expenses';
// import ExpenseList from './ExpenseList'
export default ExpenseForm
function ExpenseForm(props) {
    const [Expense,setExpense] = useState(props.expense)
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
        const Expenseobj = {date,title,amt}
        console.log(Expenseobj)
        setExpense((prev) => {
            return [
                ...prev,
                {
                    date:date,
                    title:title,
                    cost:amt
                }
            ]
        })
        return Expense
    }
    return (
        <div>   
            <form className="Form-container" onSubmit={onSubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls'> 
                        <label htmlFor="">Date</label>
                        <input type="date" onChange={dateHandler} />
                    </div>
                    <div className='new-expense__controls'>
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={titleHandler}/>
                    </div>
                    <div className='new-expense__controls'>
                        <label htmlFor="">Amt</label>
                        <input type="text" onChange={amtHandler}/>
                    </div>
                    <div className='new-expense__actions'>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

