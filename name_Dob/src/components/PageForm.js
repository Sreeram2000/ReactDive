import './PageForm.css' 
function PageForm() {
    return (
        <form> 
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="Age">Age(In years)</label>
            <input type="text" />
            <button type="submit">Update</button>
        </form>
    )
}
export default PageForm 