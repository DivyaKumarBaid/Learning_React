
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






// using hook by using the below illustration
//---------------------------------------------------------------//

// import useForm from './useForm';

// function App() {

//   const [value, handleChange] = useForm({ email: '', password: '' });

//   return (
//     <>
//       <input type="email" name="email" value={value.email} onChange={handleChange} />
//       <input type="password" name="password" value={value.password} onChange={handleChange} />
//     </>
//   );
// }

// export default App;
