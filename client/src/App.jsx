import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';

import RequireAuth from './components/RequireAuth';
import Footer from './components/Footer';

import Button from '@mui/material/Button';
import { Typography, Box, AppBar, CssBaseline, Toolbar, Container } from '@mui/material';

import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PersonIcon from '@mui/icons-material/Person';

import { ThemeProvider } from '@mui/material/styles';

import defaultTheme from './styles/styles';

function App() {

  // Modal for Welcome menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Check if user is logged in and display nav links accordingly
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


  const getUserInfo = async () => {
    try {
      const res = await axios.get()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">

      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h4'>
              .ateM
            </Typography>
          </Toolbar>
        </AppBar>

          <BrowserRouter>
          <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Create Blog</MenuItem>
          <MenuItem onClick={handleClose}><Link style={{textDecoration: 'none'}} to='/logout'>Logout</Link></MenuItem>
        </Menu>
            <header style={{margin: '10px', display: 'flex', justifyContent: 'space-between'}}>
              <Button variant='text'><Link style={{textDecoration: 'none', color: '#3f50b5'}} to='/'>Home</Link></Button>
              <Box>

                {
                  (loggedIn) ? 
                  (
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <span>Welcome</span> 
                      <PersonIcon fontSize='large' />
                    </Button>
                    </div>
                  ) : (
                    <>
                      <Button variant='outlined' style={{margin: '2px'}}><Link style={{textDecoration: 'none', color: '#3f50b5'}} to='/login'>Login</Link></Button>
                      <Button variant="contained" style={{margin: '2px'}}><Link style={{textDecoration: 'none', color: 'white'}} to='/signup'>Signup</Link></Button>
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
                  <Route path='/main' element={<MainPage />} />
                  <Route path='/login' element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                  <Route path='/signup' element={<SignupPage />} />
                  <Route path='/logout' element={<LogoutPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
                </Routes>
              </Box>
              </Container>
            </main>

            <Typography marginTop='10px' align='center'>
              <Footer />
            </Typography>
            
          </BrowserRouter>
          
      </ThemeProvider>
    </div>
  );
}

export default App;
