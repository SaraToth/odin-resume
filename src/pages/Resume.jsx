import Summary from "./Summary";
import GenInfo from "./GenInfo";
import JobItem from "../components/JobItem";

export default function Resume({jobs, degrees, genInfo, summary }) {

    const name = genInfo.first + " " + genInfo.last;

    return (
        <div className="container-resume">
            <div className="container-info">
                <h1>{name}</h1>
                <h2>{GenInfo.title}</h2>
                <div className="display-contact">
                    <div>{genInfo.phone}</div>
                    <div>{genInfo.email}</div>
                </div>
            </div>

            <div className="container-summary">
                <p>summary</p>
            </div>

            <div className="container-experience">
                <h3>Work Experience</h3>
                {jobs.map((job) => <JobItem key={job.jobID} job={job} />)}
            </div>

            <div className="container-education">
                <h3>Education</h3>
                <p>TBA</p>
            </div>
        </div>
    )

}