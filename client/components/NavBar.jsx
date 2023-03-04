import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div id='nav-bar'>
    <ul>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to=''>My Profile</Link>
      </li>
      <button id='new-review'>New Review</button>
    </ul>
  </div>
);

export default NavBar;
