import { useState } from "react";
import Job from "./Job"
import JobSum from "./JobSum";

export default function JobList() {
    const [currentSubPage, setCurrentSubPage] = useState("job");

    const handleSubmit = () =>{
        if(currentSubPage === "job") {setCurrentSubPage("jobSum")}
        if(currentSubPage === "jobSum") {setCurrentSubPage("jobList")}
    }
    
    return(
        <div>
            {currentSubPage === "job" && <Job onSubmit={handleSubmit} /> }
            {currentSubPage === "jobSum" && <JobSum onSubmit={handleSubmit}/>}
            {currentSubPage === "jobList" 
            && <div>
                <h1>You submitted job and jubsum!</h1>
            </div>
}
        </div>
    )
}