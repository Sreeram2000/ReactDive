import './App.css';
import React,{ useState } from 'react'; 
import Expenses from './components/Expenses'
import ExpenseForm from './components/ExpenseForm';
function App() {
  const expense = [
    {
      date : 15,
      title: "Insurance",
      cost : 50
    },
    {
      date : 17,
      title: "Eat_Out",
      cost : 199
    },
    {
      date : 21,
      title: "Picnic",
      cost : 105
    }
  ]

  const [Details,setDetails] = useState(expense)

  function addHandler(udate,utitle,ucost){
    return (
        setDetails((prev) => {return [...prev,{date:udate,title:utitle,cost:ucost}]}
      )
    )
  }

  return (
    <div className="App">
      <h2>Hello! Lets See How You Did This Month..</h2>
      <ExpenseForm onAddHandler={addHandler}/>
      {
        Details.map((expense) => {
          return <Expenses expenses={expense} />
        })
      }
    </div>
  );
}

export default App;
