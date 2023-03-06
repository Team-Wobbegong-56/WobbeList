import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import FeedContainer from '../Containers/FeedContainer.jsx';
import ProfileContainer from '../Containers/ProfileContainer.jsx';
import Login from './Login.jsx';
import EditProfile from './EditProfile.jsx';
import EditReview from './EditReview.jsx';
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
          <Route path='editreview' element={<EditReview />} />
          <Route path=':location' element={<FeedContainer />} />
          <Route path='profile/:user' element={<ProfileContainer />} />
          <Route path='profile/:user/edit' element={<EditProfile />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
