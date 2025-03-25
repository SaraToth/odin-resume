export default function DegreeItem({degree}) {

    return (
        <div className="degree-item">
            <h2>{degree.name} at {degree.school}</h2> 
            <p>{degree.date}</p>  
            <button type="submit" className="edit-btn">Edit</button>
        </div>
    );
}