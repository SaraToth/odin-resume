import useForm from "../hooks/useForm";

export default function JobSum({onSubmit}) {

    const {formData, handleChange, handleSubmit, formStatus} = useForm(
        {
            summary: "",
        },
        onSubmit
    );


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
            <h1>Job sum would be here</h1>
        )
    }
}