import useForm from "../hooks/useForm";

export default function Summary({onSubmit, formStatus}) {
    const {formData, handleChange} = useForm(
        {
            summary: "",
        },
        onSubmit
    );   

    const customHandleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);
    } 

    if(formStatus.isEditing && !formStatus.isDisplaying) {
        return (
            <div className="form-container">
            <form onSubmit={customHandleSubmit}>
                <h1>Career Summary</h1>
                <textarea name="summary" id="summary" value={formData.summary} onChange={handleChange} required>Type your job description here</textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
        )
    }

    if(!formStatus.isEditing && formStatus.isDisplaying) {
        return (
            <div className="display-container">
                <div className="display-content">
                    <h1>Career Summary</h1>
                    <div className="display-contact">
                        <div>{formData.summary}</div>
                    </div>
                </div>
            </div>

        )
    }
}