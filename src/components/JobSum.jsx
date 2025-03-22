import { useState } from "react"

export default function JobSum({onSubmit}) {
    const [formStatus, setFormStatus] = useState({isEditing: true, isDisplaying: false});
    const [formData, setFormData] = useState({
        summary: "",
    });

    const handleSubmit = (e)=> {
        e.preventDefault();

        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        }

        setFormData(newFormData);
        setFormStatus({isEditing: false, isDisplaying: true});
        onSubmit()
    }
    
    const handleChange = (e)=>{
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormData);
    }

    if(formStatus.isEditing && !formStatus.isDisplaying) {
        return(
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Job Summary</h1>
                    <textarea name="summary" id="summary" value={formData.summary} onChange={handleChange} required>Type your job description here</textarea>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>

        )
    }

    if(!formStatus.isEditing && formStatus.isDisplaying) {
        return(
            <h1>Submited</h1>
        )
    }
}