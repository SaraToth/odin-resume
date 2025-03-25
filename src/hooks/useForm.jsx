import { useState } from "react";

export default function useForm(initialData, onSubmit) {
        const [formData, setFormData] = useState(initialData);
    
        const handleChange = (e) => {
            const newFormData = {
                ...formData,
                [e.target.name]: e.target.value,
            };
    
            setFormData(newFormData);
        }

        const submitFormData = (e) => {
            e.preventDefault()
            if(onSubmit) {
                onSubmit(formData)
            }
        }


        return {formData, setFormData, handleChange, submitFormData};
}