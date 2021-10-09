import './PageForm.css' 
function PageForm() {
    return (
        <form className="main-container"> 
            <div className="main-form">
                <label htmlFor="name">Name</label>
                <input type="text" />
            </div>
            <div className="main-form">
                <label htmlFor="Age">Age(In years)</label>
                <input type="text" />
            </div>
            <div className="main-form">
                <button type="submit">Update</button>
            </div>
        </form>
    )
}
export default PageForm 