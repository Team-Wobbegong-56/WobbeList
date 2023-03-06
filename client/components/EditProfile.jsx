import React from 'react';
import { useLocation } from 'react-router-dom';

const EditProfile = ({ change, cancel, submit }) => {
  // const { state } = useLocation();
  // const { id } = state;

  return (
    <div id='edit-profile'>
      <h1>Edit Profile</h1>
      <table>
        <tr>
          <td>
            <label>Name: </label>
          </td>
          <td>
            <input type='text' name='name' onChange={change} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Favorite City:</label>
          </td>
          <td>
            <input type='text' name='favoriteCity' onChange={change} />
          </td>
        </tr>
        <tr>
          <td>
            <label>Bio: </label>
          </td>
          <td>
            <textarea name='bio' onChange={change} />
          </td>
        </tr>
      </table>

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
