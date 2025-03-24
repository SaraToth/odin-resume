export default function JobItem({job}) {
    console.log("Job Item - job: " + job);
    return (
        <div>
            <h2>{job.title} at {job.company}</h2> 
            <p>{job.start} - {job.end}</p> 
            <p>{job.summary}</p> 
            <button type="submit" className="edit-btn">Edit</button>
        </div>
    );
}