import React,{useState} from 'react';
import './ExpenseForm.css';
import ExpenseList from './ExpenseList'
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

