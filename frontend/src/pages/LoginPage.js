import React from 'react';
import axios from 'axios';

import Login from '../components/Login';
import { useState, useEffect } from 'react';

const LoginPage = ({setLoggedIn, loggedIn}) => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    // const [loggedIn, setLoggedIn] = useState(null);

    const handleLoginChange = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target;
        
        setLoginForm({
          ...loginForm,
          [name]: value,
        })
        console.log({name, value});
      }

    const login = async () => {
        const res = await axios.post('/login', loginForm, {
            withCredentials: true,
        })

        setLoggedIn(true);
        setLoginForm({
            email: '',
            password: '',
        })
        console.log(res);
        console.log(loggedIn);
    }

    return (
        <div>
            <h1>Login</h1>
            <Login 
                handleLoginChange={handleLoginChange} 
                loginForm={loginForm} 
                login={login}
            />
        </div>
    )
}

export default LoginPage