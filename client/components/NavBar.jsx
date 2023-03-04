import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
  // const { user } = useContext(userContext);

  // if (!user) return <Navigate to='/login' />;
  return (
    <div id='nav-bar'>
      <ul>
        <li>
          <Link to='/user/home'>Home</Link>
        </li>
        <li id='my-profile'>
          <Link to='/profile'>My Profile</Link>
        </li>
        <button id='new-review'>New Review</button>
      </ul>
      <Outlet />
    </div>
  );
};

export default NavBar;