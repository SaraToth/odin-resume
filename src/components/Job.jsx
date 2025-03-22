import { useState } from "react"

export default function Job() {

    // First render will be form to edit
    const [formStatus, setFormStatus] = useState({isEditing: true, isDisplaying: false})

    const [formData, setFormData] = useState({
        title: "",
        company: "",
        start: "",
        end: "",
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(newFormData);
        setFormStatus({isEditing: false, isDisplaying: true});
    }


    const handleChange = (e) => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(newFormData);
    }

    if(formStatus.isEditing && !formStatus.isDisplaying) {
        return (
            <div className="form-container">
                <h1>Job Info</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required></input>
    
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required></input>
    
                    <label htmlFor="start">Start Date:</label>
                    <input type="date" id="start" name="start" value={formData.start} onChange={handleChange} required></input>
    
                    <label htmlFor="end">End Date:</label>
                    <input type="date" id="end" name="end" value={formData.end} onChange={handleChange} required></input>
    
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        )
    }

    if(!formStatus.isEditing && formStatus.isDisplaying) {
        return(
            <h1>Done!</h1>
        )
    }

}