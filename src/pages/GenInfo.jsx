import "./GenInfo.css"
import useForm from "../hooks/useForm";

export default function GenInfo({setGenInfo, onSubmit}) {

    // FormStatus not necessary
    const {formData, handleChange} = useForm(
        {
            first: "",
            last: "",
            email: "",
            phone: "",
            title: "",
        },
        onSubmit
    );

    const submitGenInfo = (e) => {
        e.preventDefault();
        setGenInfo(formData);
        onSubmit()
    }
    
        return (
            <div className="form-container">
                <form onSubmit={submitGenInfo}>
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
        )
    }