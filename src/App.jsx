// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
import GenInfo from './components/GenInfo'
import Footer from './components/Footer'
import Job from './components/Job';

function App() {

  const [currentPage, setCurrentPage] = useState("genInfo");

  const handleSubmit = () =>{
    setCurrentPage("job")
  }
return (
  <div className="app-container">
    <div className="main">
      {currentPage === "genInfo" && <GenInfo onSubmit={handleSubmit} />}
      {currentPage === "job" && <Job />}
    </div>
    <Footer />
  </div>
)  
}

export default App
