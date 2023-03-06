import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EditProfile = () => {
  const [inputs, setInputs] = useState({
    favoriteCity: '',
    bio: '',
  });
  const { state } = useLocation();
  const { id } = state;

  const handleChange = (e) => {
    // console.log('category', category, 'e.target.value', e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios.post(`http:localhost:3000`);
  };

  return (
    <div id='edit-profile'>
      <h2>Edit Profile</h2>
      <label>Favorite City:</label>
      <input type='text' name='favoriteCity' onChange={handleChange} />
      <label>Bio: </label>
      <textarea name='bio' onChange={handleChange} />
      <div id='edit-buttons'>
        <button>Cancel</button>
        <button> Submit</button>
      </div>
    </div>
  );
};

export default EditProfile;
