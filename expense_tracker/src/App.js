import './App.css';
import Expenses from './components/Expenses'
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

  return (
    <div className="App">
      <h2>Hello! Lets See How You Did This Month..</h2>
      <Expenses expenses={expense[0]} />
      <Expenses expenses={expense[1]} />
      <Expenses expenses={expense[2]} />
    </div>
  );
}

export default App;
