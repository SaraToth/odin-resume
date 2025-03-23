import useForm from "../hooks/useForm"

export default function Job({onSubmit}) {

    const {formData, handleChange, handleSubmit, formStatus} = useForm(
        {
            title: "",
            company: "",
            start: "",
            end: "",
        },
        onSubmit
    );

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
            <h1>Job info would be here</h1>
        )
    }

}