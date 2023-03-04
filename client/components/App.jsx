import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Login from './Login.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login action='login'/>} />
      <Route path='/signup' element={<Login action='signup'/>} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
