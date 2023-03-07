import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams, useLocation } from 'react-router-dom';
import EditProfile from '../components/EditProfile.jsx';
import edit from '../edit.svg';
import cityPic from '../building.svg';
import stockPic from '../profile-stock.jpg';
import axios from 'axios';

const ProfileContainer = () => {
  const location = useLocation();
  const { user } = useParams();
  const [state, setState] = useState({
    activeButton: 'Activities',
    feedList: [],
  });

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      activeButton: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    name: '',
    favoriteCity: '',
    description: '',
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const submitForm = () => {
    setOpen(false);
    const data = {};
    for (let key in inputs) {
      if (!inputs[key].length) {
        data[key] = inputs[key];
      }
    }
    axios.post(`/api/update`, {
      ...data,
    });
  };

  const fetchUserFeed = () => {
    axios
      .get(
        `http://localhost:3000/api/review/user/${user}/type/${state.activeButton}`
      )
      .then((res) => {
        setState({ ...state, feedList: res.data });
      });
  };

  return (
    <div id='profile-page'>
      <div id='sidebar'>
        <button id='edit-profile-button' onClick={() => setOpen(!open)}>
          <img src={edit} />
        </button>
        <div id='sidebar-header'>
          <img
            height='200px'
            width='200px'
            id='profile-picture'
            src={stockPic}
          />
          <h2>{user}</h2>
        </div>
        <ul>
          <li>
            <img height='25px' width='25px' src={cityPic} />
            {inputs.favoriteCity}
          </li>
          <li>Bio: </li>
          {inputs.description}
        </ul>
      </div>
      {open ? (
        <EditProfile
          change={handleChange}
          cancel={() => setOpen(false)}
          submit={submitForm}
        />
      ) : null}
      <div id='profile-feed' className='profile-feed'>
        <Feed
          fetchFeed={fetchUserFeed}
          location={'Posts'}
          handleClick={handleClick}
          feedList={state.feedList}
          activeButton={state.activeButton}
          windowLocation={location.pathname}
        />
      </div>
    </div>
  );
};

export default ProfileContainer;
