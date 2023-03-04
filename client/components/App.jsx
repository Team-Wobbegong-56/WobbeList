import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import '../style.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/user' element={<NavBar />}>
          <Route path='home' element={<HomePage />} />
          {/* <Route path='/' element={<Login />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
