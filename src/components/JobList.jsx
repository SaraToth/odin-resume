import { useState } from "react";
import Job from "./Job"
import JobSum from "./JobSum";

export default function JobList() {
    const [currentSubPage, setCurrentSubPage] = useState("job");

    const handleSubmit = () =>{
        setCurrentSubPage("jobSum")
    }
    
    return(
        <div>
            {currentSubPage === "job" && <Job onSubmit={handleSubmit} /> }
            {currentSubPage === "jobSum" && <JobSum />}
        </div>
    )
}