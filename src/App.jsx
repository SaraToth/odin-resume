// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import GenInfo from './components/GenInfo'
import Footer from './components/Footer'
import JobList from './components/JobList';

function App() {

  const [currentPage, setCurrentPage] = useState("genInfo");

  const handleSubmit = () =>{
    setCurrentPage("jobList")
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo onSubmit={handleSubmit} />}
      {currentPage === "jobList" && <JobList />}
    </div>
    <Footer />
  </div>
)  
}

export default App
