import { useState } from "react"
import './GenInfo.css'

export default function GenInfo() {

    // First render will be form to edit
    const [formStatus, setFormStatus] = useState({isEditing: true, isDisplaying: false})

    const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
        phone: "",
        title: "",
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(newFormData);
        setFormStatus({isEditing: false, isDisplaying: true})
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
            <>
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first">First Name:</label>
                    <input type="text" id="first" name="first" value={formData.first} onChange={handleChange} required></input>

                    <label htmlFor="last">Last Name:</label>
                    <input type="text" id="last" name="last" value={formData.last} onChange={handleChange} required></input>
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>

                    <label htmlFor="phone">Phone:</label>
                    <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} required></input>
                </div>

                <div>
                    <label htmlFor="title">Current or Desired Job Title:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required></input>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
            </>
        )
    }

    if(!formStatus.isEditing && formStatus.isDisplaying) {
        return (
            <>
            <h1>General Information</h1>
            <p>{formData.first}</p>
            <p>{formData.last}</p>
            <p>{formData.title}</p>
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
            </>
        )
    }

}