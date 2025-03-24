import DegreeList from "./DegreeList";
import JobList from "./JobList";
import Summary from "./Summary";
import GenInfo from "./GenInfo";

export default function Resume() {
    return (
        <div>
            <GenInfo />
            <Summary />
            <JobList />
            <DegreeList />
        </div>
    )

}