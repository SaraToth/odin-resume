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

        const handleSubmit = (e) => {
            e.preventDefault()

            const newFormData = {
                ...formData,
                [e.target.name]: e.target.value,
            };

            if(onSubmit) {
                setFormData(newFormData);
                onSubmit();
            }

            setFormData(initialData);
        }

        return {formData, setFormData, handleChange, handleSubmit};
}