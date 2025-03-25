// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import GenInfo from './pages/GenInfo'
import Footer from './components/Footer'
import JobList from './pages/JobList';
import DegreeList from './pages/DegreeList';
import Summary from './pages/Summary';
import Resume from './pages/Resume';

function App() {
  // First page of UI is the General Info page component
  const [currentPage, setCurrentPage] = useState("genInfo");

  const [jobs, setJobs] = useState([]); // Stores ALL submitted job data in an array
  const [degrees, setDegrees] = useState([]); // Stores ALL submitted degree data in an array
  const [genInfo, setGenInfo] = useState([]);
  const [summary, setSummary] = useState([]);

  const changePage = () =>{
    if(currentPage === "genInfo") setCurrentPage("jobList");
    if(currentPage === "jobList") setCurrentPage("degreeList");
    if(currentPage === "degreeList") setCurrentPage("summary");
    if(currentPage === "summary") setCurrentPage("resume");
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo setGenInfo={setGenInfo} onSubmit={changePage} />}
      {currentPage === "jobList" && <JobList jobs={jobs} setJobs={setJobs} onClick={changePage} />}
      {currentPage === "degreeList" && <DegreeList degrees={degrees} setDegrees={setDegrees} onClick={changePage} />}
      {currentPage === "summary" && <Summary setSummary={setSummary} onSubmit={changePage}/>}
      {currentPage === "resume" && <Resume jobs={jobs} degrees={degrees} genInfo={genInfo} summary={summary} />}
    </div>
    <Footer />
  </div>
)  
}

export default App
