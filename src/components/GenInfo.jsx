import { useState } from "react"
import "./GenInfo.css"

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
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1>General Information</h1>
                    <div className="form-content">

                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="first">First Name:</label>
                                <input type="text" id="first" name="first" value={formData.first} onChange={handleChange} required></input>
                            </div>

                            <div className="form-item">
                                <label htmlFor="last">Last Name:</label>
                                <input type="text" id="last" name="last" value={formData.last} onChange={handleChange} required></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required></input>
                            </div>

                            <div className="form-item">
                                <label htmlFor="phone">Phone:</label>
                                <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} required></input>
                            </div>
                        </div>


                        <div className="form-item">
                            <label htmlFor="title">Job Title:</label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required></input>
                        </div>
                    </div>
                    <div className="form-btn">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
            </>
        )
    }

    if(!formStatus.isEditing && formStatus.isDisplaying) {
        const name = formData.first + " " + formData.last;
        return (
            <div className="display-container">
                <div className="display-content">
                    <h1>{name}</h1>
                    <h2>{formData.title}</h2>
                    <div className="display-contact">
                        <div>{formData.phone}</div>
                        <div>{formData.email}</div>
                    </div>
                </div>
            </div>

        )
    }

}