import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Login = ({loginForm, handleLoginChange, login}) => {

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
      await login();

      // navigate
      navigate('/');
  }

  return (
    <Box sx={{ mx: 'auto', width: 400 }}>
    <Typography variant='h6' sx={{paddingBottom: 1 }}>Login</Typography>
    <form onSubmit={handleLogin}>
        <TextField 
            label='Email'
            fullWidth 
            size='small' 
            sx={{paddingBottom: 1 }}
            onChange={handleLoginChange} 
            value={loginForm.email} 
            type='email' 
            name='email' 
            placeholder='Enter email...' 
        />

        <TextField 
            label='Password'
            fullWidth 
            size='small' 
            sx={{paddingBottom: 1 }}
            onChange={handleLoginChange} 
            value={loginForm.password} 
            type='password' 
            name='password' 
            placeholder='Enter password...' 
        />

        <Button fullWidth variant='contained' type='submit'>Login</Button>
    </form>
    </Box>
  )
}

export default Login