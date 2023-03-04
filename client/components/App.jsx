import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import '../style.css';
import UserContext from '../UserContext.jsx';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies] = useCookies();
  const [user, setUser] = useState(cookies.userId ? cookies.userId : null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path='/' element={<Login action='login'/>} />
        <Route path='/signup' element={<Login action='signup'/>} />
        <Route path='/user' element={<NavBar />}>
          <Route path='home' element={<HomePage />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
