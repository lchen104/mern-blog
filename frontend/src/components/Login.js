import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({loginForm, handleLoginChange, login}) => {

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
      await login();

      // navigate
      navigate('/');
  }

  return (
    <form onSubmit={handleLogin}>
        <input 
            onChange={handleLoginChange} 
            value={loginForm.email} 
            type='email' 
            name='email' 
            placeholder='Enter email...' 
        /><br />

        <input 
            onChange={handleLoginChange} 
            value={loginForm.password} 
            type='password' 
            name='password' 
            placeholder='Enter password...' 
        /><br />

        <button type='submit'>Login</button>
    </form>
  )
}

export default Login