import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import EditReview from './EditReview.jsx';

const NavBar = () => {
  // const { user } = useContext(userContext);

  // if (!user) return <Navigate to='/login' />;
  return (
    <div id='nav-bar'>
      <ul id='nav-links'>
        <li>
          <Link to='/user/home'>WobbeList</Link>
        </li>
        <li id='my-profile'>
          <Link to='/user/profile/:user'>Profile</Link>
        </li>
        <Link to='/user/editreview'>
          <button id='new-review'>New Review</button>
        </Link>
      </ul>

      <EditReview />
      <Outlet />
    </div>
  );
};

export default NavBar;
