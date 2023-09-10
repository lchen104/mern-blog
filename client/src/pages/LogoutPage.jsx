import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';


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
        <Box>
            <Typography variant='h5'>You are now logged out</Typography>
        </Box>
    )
}

export default LogoutPage