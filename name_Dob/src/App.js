import React from 'react';
import {useState} from 'react'
import PageForm from './components/PageForm';
import PageCard from './components/PageCard'


function App() {
  const dob = [
    {
      Name: "Ramesh",
      Age: 20
    }
  ]
  const [Dob, setDob] = useState(dob)
  function onSubmitHandler(Name,Age) {
    setDob( (prev) => [
      ...prev,
      {
        Name: Name,
        Age: Age
      }
    ]
    )
  }

  return (
    <div>
      <PageForm onSubmitHandler={onSubmitHandler}/>
      {Dob.map((Dob) => {
        return <PageCard dob={Dob}/>
      })}
    </div>
  );
}

export default App;
