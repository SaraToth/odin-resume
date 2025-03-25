import { useState } from "react";
import Job from "../components/Job"
import JobSum from "../components/JobSum";
import JobItem from "../components/JobItem";

export default function JobList({jobs, setJobs, onClick}) {
    const [currentSubPage, setCurrentSubPage] = useState("job");
    const [currentJob, setCurrentJob] = useState({}) // Stores current job temporarily

    const handleJobSubmit = (jobData) => {

        // Get Job info and switch to job summary form
        setCurrentJob(jobData);
        setCurrentSubPage("jobSum");
    }

    const handleJobSumSubmit = (jobSumData) => {

        // Create a unique id for each job
        const jobID = crypto.randomUUID();

        // Combine job data, with summary and an id into one object
        const newJobObject = {...currentJob, ...jobSumData, jobID: jobID,}; 

        // Add new job to the array state
        setJobs((prevJobs) => [...prevJobs, newJobObject]);

        // Reset current job info
        setCurrentJob({});

        // jobList page will render a list of all jobs
        setCurrentSubPage("jobList"); 
    }
        
    return(
        <div>
            {currentSubPage === "job" && <Job onSubmit={handleJobSubmit} /> }
            {currentSubPage === "jobSum" && <JobSum onSubmit={handleJobSumSubmit}/>}
            {currentSubPage === "jobList" 
            && <div>
                <h1>Work Experience</h1>
                {/* Job passes one job property as a prop */}
                {jobs.map((job) => <JobItem key={job.jobID} job={job} />)}
                <button onClick={onClick} className="submit-btn">Submit</button>
            </div>
}
        </div>
    )
}