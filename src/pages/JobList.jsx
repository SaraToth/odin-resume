import { useState } from "react";
import Job from "../components/Job"
import JobSum from "../components/JobSum";

export default function JobList() {
    const [currentSubPage, setCurrentSubPage] = useState("job");
    const [jobs, setJobs] = useState([]); // Stores ALL submitted job data in an array
    const [currentJob, setCurrentJob] = useState({}) // Stores current job temporarily

    const handleJobSubmit = (jobData) => {
        const newJobData = {...jobData};
        setCurrentJob(newJobData); // Stores current job data temporarily
        setCurrentSubPage("jobSum"); // Move to jobSum page
    }

    const handleJobSumSubmit = (jobSumData) => {
        const newJobItem = {...currentJob, ...jobSumData}; // Copy of current job info collected and copy of the jobSum
        setJobs(prevJobs => [...prevJobs, newJobItem]);
        setCurrentJob({}); // Reset job info
        setCurrentSubPage("jobList");
    }
    
    return(
        <div>
            {currentSubPage === "job" && <Job onSubmit={handleJobSubmit} /> }
            {currentSubPage === "jobSum" && <JobSum onSubmit={handleJobSumSubmit}/>}
            {currentSubPage === "jobList" 
            && <div>
                <h1>You submitted job and jubsum!</h1>
            </div>
}
        </div>
    )
}