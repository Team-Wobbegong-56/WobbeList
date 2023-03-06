import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  // const { user } = useContext(userContext);

  // if (!user) return <Navigate to='/login' />;
  return (
    <div id='nav-bar'>
      <ul id='nav-links'>
        <li>
          <Link to='/user/home'>Home</Link>
        </li>
        <li id='my-profile'>
          <Link to='/user/profile/:user'>My Profile</Link>
        </li>
        <Link to='/user/editreview'>
          <button id='new-review'>New Review</button>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;
