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

  // Form Status state for each form page
  const [formStatus, setFormStatus] = useState({
    genInfo: { isEditing: true, isDisplaying: false},
    summary: { isEditing: true, isDisplaying: false},
  });

  const changePage = () =>{
    if(currentPage === "genInfo") setCurrentPage("jobList");
    if(currentPage === "jobList") setCurrentPage("degreeList");
    if(currentPage === "degreeList") setCurrentPage("summary");
    if(currentPage === "summary") setCurrentPage("resume");
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo formStatus={formStatus.genInfo} onSubmit={changePage} />}
      {currentPage === "jobList" && <JobList jobs={jobs} setJobs={setJobs} onClick={changePage} />}
      {currentPage === "degreeList" && <DegreeList degrees={degrees} setDegrees={setDegrees} onClick={changePage} />}
      {currentPage === "summary" && <Summary formStatus={formStatus.summary} onSubmit={changePage}/>}
      {currentPage === "resume" && <Resume />}
    </div>
    <Footer />
  </div>
)  
}

export default App
