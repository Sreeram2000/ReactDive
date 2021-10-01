import React,{useState} from 'react';
import './Expenses.css';
function Expenses(props) {
    // let title = props.expenses.title
    let [title,setTitle] = useState(props.expenses.title)
    return (
        <div className="Expenses-container">
            <div className="Expenses-item">
                <div className="Expenses-date">{props.expenses.date}</div>
                <div className="Expenses-title">{title}</div>
                <div className="Expenses-cost">${props.expenses.cost}</div>
                <button onClick={ () => 
                    {
                        setTitle('Updated!')
                        console.log("Hurray!!")
                    }
                }>Update</button>
            </div>
        </div>
    )
}

export default Expenses