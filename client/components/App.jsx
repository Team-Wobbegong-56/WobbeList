import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import FeedContainer from '../Containers/FeedContainer.jsx';
import Login from './Login.jsx';
import '../style.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login action='login' />} />
        <Route path='/signup' element={<Login action='signup' />} />
        <Route path='/user' element={<NavBar />}>
          <Route path='home' element={<HomePage />} />
          <Route path=':location' element={<FeedContainer />} />
          {/* <Route path=':user' element={<Profile />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
