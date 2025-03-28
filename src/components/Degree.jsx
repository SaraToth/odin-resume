import useForm from "../hooks/useForm";

export default function Degree({onSubmit}) {
    const {formData, handleChange, submitFormData} = useForm(
        {
            name: "",
            school: "",
            date: "",
        },
        onSubmit
    );

    return(
        <div className="form-container">
            <h1>Degree Information</h1>
            <form onSubmit={submitFormData} >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required></input>

                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" value={formData.school} onChange={handleChange} required></input>

                <label htmlFor="date">Graduation Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required></input>
                <button type="subumit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}