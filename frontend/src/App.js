import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';

import RequireAuth from './components/RequireAuth';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function App() {

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
    
    // res.sendStatus();
}

  return (
    <div className="App">
    
        <BrowserRouter>
              <header style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button variant='text'><Link style={{textDecoration: 'none'}} to='/'>Blogger</Link></Button>
                <Box>

                  {(loggedIn) ? <Button variant="contained"><Link style={{textDecoration: 'none'}} to='/logout'>Logout</Link></Button> : <>
                  <Button variant='outlined' style={{margin: '2px'}}><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></Button>
                  <Button variant="contained" style={{margin: '2px'}}><Link style={{textDecoration: 'none'}} to='/signup'>Signup</Link></Button>
                  </>}
                  
                </Box>
              </header>

            <Box style={{display: 'flex', justifyContent: 'center'}}>
            <Routes>
              <Route index element={
                <RequireAuth loggedIn={loggedIn} checkAuth={checkAuth} >
                  <BlogsPage />
                </RequireAuth>} 
              />
            
              <Route path='/login' element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/logout' element={<LogoutPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            </Routes>
            </Box>
        </BrowserRouter>
        

    </div>
  );
}

export default App;
