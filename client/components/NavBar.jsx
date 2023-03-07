import React, { useState, useContext } from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import EditReview from './EditReview.jsx';
import UserContext from '../UserContext.jsx';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) return <Navigate to='/' />;

  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    city: '',
    category: 'Activities',
    name: '',
    rating: 1,
    comments: '',
    address: '',
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const logout = () => {
    setUser(null);
    <Navigate to='/' />;
  };

  const handleSubmit = (e) => {
    setOpen(false);
    setInputs({
      city: '',
      category: 'Activities',
      name: '',
      rating: 1,
      comments: '',
      address: '',
    });
    axios.post('http://localhost:3000/api/review', {
      user_id: user._id,
      city: inputs.city,
      review_type: inputs.category,
      name: inputs.name,
      rating: inputs.rating,
      address: inputs.address,
      comments: inputs.comments,
    });
    // .then((res) => );
  };

  return (
    <div id='nav-bar'>
      <ul id='nav-links'>
        <li>
          <Link to='/user/home'>WobbeList</Link>
        </li>
        <li id='my-profile'>
          <Link to='/user/profile'>Profile</Link>
        </li>
        <li>
          <button id='new-review' onClick={() => setOpen(!open)}>
            New Review
          </button>
        </li>
        <li>
          <button onClick={logout} id='logout'>
            Logout
          </button>
        </li>
      </ul>
      {open ? (
        <EditReview
          title={'New'}
          current={inputs}
          change={handleChange}
          cancel={() => setOpen(false)}
          submit={handleSubmit}
        />
      ) : null}
      <Outlet />
    </div>
  );
};

export default NavBar;
