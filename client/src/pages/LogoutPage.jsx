import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import AndroidIcon from '@mui/icons-material/Android';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const LogoutPage = ({setLoggedIn}) => {
    useEffect(() => {
        logout();
    }, []);

    const logout = async () => {
        await axios.get('/logout');
        setLoggedIn(false);
    }

    return (
        <Box align='center' height='80vh'>
            <Typography color='secondary'><AndroidIcon gutterBottom fontSize='large' /></Typography>
            <Typography variant='h5'>You are now logged out</Typography>
        </Box>
    )
}

export default LogoutPage