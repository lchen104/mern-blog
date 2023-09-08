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
        return <Navigate to="/login" />
    }

    return (
        <div>{props.children}</div>
    )
}

export default RequireAuth