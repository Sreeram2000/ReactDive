import './PageCard.css'
//pageCard return div elements
function PageCard(props) {
    return (
        <div className="main-div"> 
            <div className="main-content">{props.dob.Name}</div>
            <div className="main-content">{props.dob.Age}</div>
        </div>
    )
}
export default PageCard