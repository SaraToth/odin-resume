import Summary from "./Summary";
import GenInfo from "./GenInfo";
import JobItem from "../components/JobItem";

export default function Resume({jobs, degrees, genInfo, summary }) {

    const name = genInfo.first + " " + genInfo.last;

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h2>{GenInfo.title}</h2>
                <div className="display-contact">
                    <div>{genInfo.phone}</div>
                    <div>{genInfo.email}</div>
                </div>
            </div>

            <div>
                <p>summary</p>
            </div>

            <div>
                <h3>Work Experience</h3>
                {jobs.map((job) => <JobItem key={job.jobID} job={job} />)}
            </div>

            <div>
                <h3>Education</h3>
                <p>TBA</p>
            </div>
        </div>
    )

}