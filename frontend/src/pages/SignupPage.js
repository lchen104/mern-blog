import React from 'react';
import axios from 'axios';

import { useState } from 'react';

import Signup from '../components/Signup';

const SignupPage = () => {
    const [signupForm, setSignupForm] = useState({
        name: '',
        email: '',
        password: '',
    });


    const handleSignupChange = (e) => {
        console.log(e.target.value)
        const {name, value} = e.target;
        
        setSignupForm({
          ...signupForm,
          [name]: value,
        })
        console.log({name, value})
      }

      const signup = async () => {
        try {
          const res = await axios.post('/signup', signupForm)

          setSignupForm({
              name: '',
              email: '',
              password: '',
          });
          console.log(res);
          console.log(signup)
        } catch (error) {
          console.log(error)
        }

    }
    
  return (
    <div>
        {/* <h1>Signup</h1> */}
        <Signup 
          handleSignupChange={handleSignupChange} 
          signupForm={signupForm} 
          signup={signup} 
        />
    </div>
  )
}

export default SignupPage