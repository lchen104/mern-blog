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
        const res = await axios.get('/check-auth', {withCredentials: true});

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
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Signup</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            </ul>
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
