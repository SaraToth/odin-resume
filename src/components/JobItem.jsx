export default function JobItem({job}) {

    return (
        <div className="job-item">
            <h2>{job.title} at {job.company}</h2> 
            <p>{job.start} - {job.end}</p> 
            <p>{job.summary}</p> 
            <button id={job.jobID} type="submit" className="edit-btn">Edit</button>
        </div>
    );
}