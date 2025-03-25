import { useState } from "react";

export default function useForm(initialData) {
        const [formData, setFormData] = useState(initialData);
    
        const handleChange = (e) => {
            const newFormData = {
                ...formData,
                [e.target.name]: e.target.value,
            };
    
            setFormData(newFormData);
        }

        return {formData, setFormData, handleChange};
}