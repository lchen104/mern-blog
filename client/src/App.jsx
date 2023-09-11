import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';

import RequireAuth from './components/RequireAuth';

import Button from '@mui/material/Button';
import { Typography, Box, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

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
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h4'>
            .ateM
          </Typography>
        </Toolbar>
      </AppBar>

        <BrowserRouter>
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

          <main>
            <Container maxWidth='sm'>
            <Box 
              display='flex' 
              justifyContent='center'
            >
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
            </Container>
          </main>
        </BrowserRouter>
        

    </div>
  );
}

export default App;
