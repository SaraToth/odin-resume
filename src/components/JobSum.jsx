import useForm from "../hooks/useForm";

export default function JobSum({onSubmit}) {

    const {formData, handleChange, submitFormData} = useForm(
        {
            summary: "",
        },
        onSubmit
    );

    return(
        <div className="form-container">
            <form onSubmit={submitFormData}>
                <h1>Job Summary</h1>
                <textarea name="summary" id="summary" value={formData.summary} onChange={handleChange} required>Type your job description here</textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>

    )

}