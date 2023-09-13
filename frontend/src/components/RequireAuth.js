import React from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = (props) => {
    // console.log(props.loggedIn)

    useEffect(() => {
        if (props.loggedIn === null) {
            props.checkAuth()
        }
    }, [])

    if (props.loggedIn === null) {
        return <div>Loading...</div>;
    }

    if (props.loggedIn === false) {
        // goto mainpage at root when not logged in
        return <Navigate to="/main" />
    }

    return (
        <div>{props.children}</div>
    )
}

export default RequireAuth