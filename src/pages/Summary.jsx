import useForm from "../hooks/useForm";

export default function Summary({onSubmit, setSummary}) {
    const {formData, handleChange} = useForm(
        {
            summary: "",
        },
        onSubmit
    );   

    const customHandleSubmit = (e) => {
        e.preventDefault();

        const newSummary = {...e}
        setSummary(newSummary);

        onSubmit(formData);
    } 

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