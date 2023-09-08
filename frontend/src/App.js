import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import BlogsPage from "./pages/BlogsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';

import RequireAuth from './components/RequireAuth';

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
                Plogger
                <div>
                  <Link to='/'>Home</Link>&nbsp;
                  <Link to='/login'>Login</Link>&nbsp;
                  <Link to='/signup'>Signup</Link>&nbsp;
                  <Link to='/logout'>Logout</Link>&nbsp;
                </div>
              </header>
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

        </BrowserRouter>
        

    </div>
  );
}

export default App;
