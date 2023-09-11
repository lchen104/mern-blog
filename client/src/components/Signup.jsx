import React from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Signup = ({signupForm, handleSignupChange, signup}) => {

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        await signup();

        // navigate
        navigate('/login');
    }

  return (
    <Box width='550px'>
        <Typography variant='h6' sx={{paddingBottom: 1 }}>Signup</Typography>
        <form onSubmit={handleSignup}>
            <TextField 
                label='Name'
                fullWidth 
                size='small' 
                sx={{paddingBottom: 1 }} 
                onChange={handleSignupChange} 
                value={signupForm.name} 
                type='text' 
                name='name' 
                placeholder='Enter name...' 
            />

            <TextField 
                label='Email'
                fullWidth 
                size='small' 
                sx={{paddingBottom: 1 }} 
                onChange={handleSignupChange} 
                value={signupForm.email} 
                type='email' 
                name='email' 
                placeholder='Enter email...' 
            />

            <TextField 
                label='Password'
                fullWidth 
                size='small' 
                sx={{paddingBottom: 1 }} 
                onChange={handleSignupChange} 
                value={signupForm.password} 
                type='password' 
                name='password' 
                placeholder='Enter password...' 
            />

            <Button fullWidth variant='contained' type='submit'><HowToRegIcon />&nbsp;Signup</Button>
        </form>
    </Box>
  )
}

export default Signup