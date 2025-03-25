import { useState } from "react";
import Degree from "../components/Degree";
import DegreeItem from "../components/DegreeItem";

export default function DegreeList({degrees, setDegrees, onClick}) {
    const [currentSubPage, setCurrentSubPage] = useState("degree");

    const handleDegreeSubmit = (degreeData) => {
        const degreeID = crypto.randomUUID();
        console.log("Degree Data: " + JSON.stringify(degreeData))
        const newDegreeObject = {...degreeData, degreeID: degreeID};

        setDegrees((prevDegrees) => [...prevDegrees, newDegreeObject])
        setCurrentSubPage("degreeList");

    }

    return(
        <div>
            {currentSubPage === "degree" && <Degree onSubmit={handleDegreeSubmit}/>}
            {currentSubPage === "degreeList" 
            && <div>
                    <h1>Degree List</h1>
                    {degrees.map((degree)=> < DegreeItem key={degree.degreeID} degree={degree} />)}
                    <button className="add-btn">Add</button>
                    <button onClick={onClick} className="submit-btn">Submit</button>
                </div>}
        </div>
    )
}