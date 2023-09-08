import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = ({signupForm, handleSignupChange, signup}) => {

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        await signup();

        // navigate
        navigate('/login');
    }

  return (
    <form onSubmit={handleSignup}>
        <input 
            onChange={handleSignupChange} 
            value={signupForm.name} 
            type='text' 
            name='name' 
            placeholder='Enter name...' 
        /><br />

        <input 
            onChange={handleSignupChange} 
            value={signupForm.email} 
            type='email' 
            name='email' 
            placeholder='Enter email...' 
        /><br />

        <input 
            onChange={handleSignupChange} 
            value={signupForm.password} 
            type='password' 
            name='password' 
            placeholder='Enter password...' 
        /><br />

        <button type='submit'>Signup</button>
    </form>
  )
}

export default Signup