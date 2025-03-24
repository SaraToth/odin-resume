import useForm from "../hooks/useForm";

export default function Degree({onSubmit}) {
    const {formData, handleChange, formStatus} = useForm(
        {
            name: "",
            school: "",
            date: "",
        },
        onSubmit
    );

    const customHandleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formData);
    }

    if(formStatus.isEditing && !formStatus.isDisplaying) {
        return(
            <div className="form-container">
                <h1>Degree Information</h1>
                <form onSubmit={customHandleSubmit} >
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
}