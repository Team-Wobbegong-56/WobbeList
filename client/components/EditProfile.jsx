import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EditProfile = ({ handleChange, cancel, submit }) => {
  // const { state } = useLocation();
  // const { id } = state;

  // const handleSubmit = (e) => {
  //   axios.patch(`http:localhost:3000`);
  // };

  return (
    <div id='edit-profile'>
      <h2>Edit Profile</h2>

      <label>Favorite City:</label>
      <input type='text' name='favoriteCity' onChange={handleChange} />
      <label>Bio: </label>
      <textarea name='bio' onChange={handleChange} />
      <div id='edit-buttons'>
        <button id='edit-cancel' onClick={cancel}>
          Cancel
        </button>
        <button id='edit-submit' onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
