// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import GenInfo from './pages/GenInfo'
import Footer from './components/Footer'
import JobList from './pages/JobList';

function App() {

  const [currentPage, setCurrentPage] = useState("genInfo");

  const changePage = () =>{
    if(currentPage === "genInfo") setCurrentPage("jobList");
    if(currentPage === "jobList") setCurrentPage("degreeList");
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo onSubmit={changePage} />}
      {currentPage === "jobList" && <JobList onClick={changePage} />}
      {currentPage === "degreeList" && <h1>She not ready yet</h1>}
    </div>
    <Footer />
  </div>
)  
}

export default App
