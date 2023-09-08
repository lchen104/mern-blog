import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';

const LogoutPage = ({setLoggedIn}) => {
    useEffect(() => {
        logout();
    }, []);

    const logout = async () => {
        await axios.get('/logout', { withCredentials: true });
        setLoggedIn(false);
    }

    return (
        <h1>You are now logged out</h1>
    )
}

export default LogoutPage