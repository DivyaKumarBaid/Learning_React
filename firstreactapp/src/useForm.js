//custom hook that handles the form
import { useState } from 'react';

const useForm = (initialValues) => { 
    //storing initial values of the form
    const [values, setValues] = useState(initialValues);

    //function that handles the change in the form

    function handleChange(event) {

        //destruct the event.target object
        const { name, value, type, checked } = event.target
        //checked and unchecked for check box

        setValues(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    //returning an array that contains an object and the funtion that changes the value

    return [values,handleChange]
}

export default useForm;