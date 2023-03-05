import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import EditProfile from '../components/EditProfile.jsx';
import edit from '../edit.svg';
import stockPic from '../profile-stock.jpg';

const ProfileContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useParams();
  const [state, setState] = useState({
    category: 'Activities',
    activeButton: 'Activities',
    feedList: [],
  });

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      category: e.target.value,
      activeButton: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    favoriteCity: '',
    bio: '',
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    setOpen(false);
  };

  // const fetchUserPosts = () => {
  //   axios
  //     .get(`http://localhost:3000/${user}`)
  //     .then((res) => {
  //       setState({ ...state, feedList: res.data });
  //     });
  // };

  return (
    <div>
      <div id='sidebar'>
        <button id='edit-profile-button' onClick={() => setOpen(!open)}>
          <img src={edit} />
        </button>
        <div id='sidebar-header'>
          <h2>{user}</h2>
          <img height='200px' width='200px' src={stockPic} />
        </div>
        <ul>
          <li>Favorite City:</li>
          <li>Bio: </li>
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
          // fetchFeed={fetchLocationFeed}
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
