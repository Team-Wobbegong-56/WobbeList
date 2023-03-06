import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import EditReview from './EditReview.jsx';

const NavBar = () => {
  // const { user } = useContext(userContext);

  // if (!user) return <Navigate to='/login' />;
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

  const handleSubmit = (e) => {
    setOpen(false);
    axios.post('http://localhost:3000/api/review', {
      user_id: '6403c4d2c983ee99555e1365',
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
          <Link to='/user/profile/:user'>Profile</Link>
        </li>
        <li>
          <button id='new-review' onClick={() => setOpen(!open)}>
            New Review
          </button>
        </li>
        <li>
          <button /*onClick={logout} */ id='logout'>Logout</button>
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
