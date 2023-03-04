import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import Login from './Login.jsx';
import '../style.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login action='login'/>} />
      <Route path='/signup' element={<Login action='signup'/>} />
      <Route path='/user' element={<NavBar />}>
        <Route path='/home' element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
