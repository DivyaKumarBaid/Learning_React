import React from 'react';
import './App.css';
import useForm from './useForm';

function App() {

  const [value, handleChange] = useForm({ email: '', password: '' });

  return (
    <>
      <input type="email" name="email" value={value.email} onChange={handleChange} />
      <input type="password" name="password" value={value.password} onChange={handleChange} />
    </>
  );
}

export default App;
