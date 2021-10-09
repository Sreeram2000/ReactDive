import React,{useState} from 'react'
import './PageForm.css' 
function PageForm(props) {
    const [Name, setName] = useState("")
    const [Age, setAge] = useState("")
    function nameHandler(event) {
        setName(event.target.value)
    }
    function ageHandler(event) {
        setAge(event.target.value)
    }

    function onHandler(event) {
        event.preventDefault()
        props.onSubmitHandler(Name,Age)
        setName("")
        setAge("")
    }
    return (
        <form className="main-container" onSubmit={onHandler}> 
            <div className="main-form">
                <label htmlFor="name">Name</label>
                <input type="text" value={Name} onChange={nameHandler}/>
            </div>
            <div className="main-form">
                <label htmlFor="Age">Age</label>
                <input type="text" value={Age} onChange={ageHandler}/>
            </div>
            <div className="main-form">
                <button type="submit">Update</button>
            </div>
        </form>
    )
}
export default PageForm 