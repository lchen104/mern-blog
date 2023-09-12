import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/Login';
import Avatar from '@mui/material/Avatar';

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
    <Box width='550px' align='center'>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
    <Typography variant='h6' sx={{paddingBottom: 1 }}>Login</Typography>
    <form onSubmit={handleLogin}>
        <TextField 
            required
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
            required
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

        <Button fullWidth variant='contained' type='submit'><LoginIcon />&nbsp;Login</Button>
    </form>
    </Box>
  )
}

export default Login