import './Expenses.css';
function Expenses(props) {
    return (
        <div className="Expenses-container">
            <div className="Expenses-item">
                <div className="Expenses-date">{props.expenses.date}</div>
                <div className="Expenses-title">{props.expenses.title}</div>
                <div className="Expenses-cost">${props.expenses.cost}</div>
            </div>
        </div>
    )
}

export default Expenses