import useForm from "../hooks/useForm";

export default function JobSum({onSubmit}) {

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

    return(
        <div className="form-container">
            <form onSubmit={customHandleSubmit}>
                <h1>Job Summary</h1>
                <textarea name="summary" id="summary" value={formData.summary} onChange={handleChange} required>Type your job description here</textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>

    )

}