// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import GenInfo from './pages/GenInfo'
import Footer from './components/Footer'
import JobList from './pages/JobList';

function App() {

  const [currentPage, setCurrentPage] = useState("genInfo");

  const changePage = () =>{
    setCurrentPage("jobList")
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo onSubmit={changePage} />}
      {currentPage === "jobList" && <JobList />}
    </div>
    <Footer />
  </div>
)  
}

export default App
