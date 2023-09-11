import React from 'react'
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
// import RequireAuth from '../components/RequireAuth';

import { Typography, AppBar,  Toolbar, Box } from '@mui/material';
import Button from '@mui/material/Button';


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(null);

    const checkAuth = async () => {
        try {
            const res = await axios.get('/check-auth');

            setLoggedIn(true);
            console.log(res);
            console.log(loggedIn);
        } catch (error) {
            console.log(error);
            setLoggedIn(false);
        }
    }

    return (
        <div>
            <AppBar position='relative'>
                <Toolbar>
                <Typography variant='h4'>
                    .ateM
                </Typography>
                </Toolbar>
            </AppBar>
            <header style={{margin: '10px', display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='text'><Link style={{textDecoration: 'none'}} to='/'>Home</Link></Button>
            <Box>

              {
                (loggedIn) ? 
                (
                  <>
                    Welcome&nbsp;<Button variant="contained"><Link style={{textDecoration: 'none'}} to='/logout'>Logout</Link></Button>
                  </>
                ) : (
                  <>
                    <Button variant='outlined' style={{margin: '2px'}}><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></Button>
                    <Button variant="contained" style={{margin: '2px'}}><Link style={{textDecoration: 'none'}} to='/signup'>Signup</Link></Button>
                  </>
                )
              }
              
            </Box>
          </header>
        </div>
    )
}

export default Header