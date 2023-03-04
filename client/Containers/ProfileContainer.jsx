import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ProfileContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useParams();
  const [state, setState] = useState({
    category: 'Activities',
    activeButton: 'Activities',
    feedList: [],
  });

  const handleClick = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      category: e.target.value,
      activeButton: e.target.value,
    });
  };
  // const fetchUserPosts = () => {
  //   axios
  //     .get(`http://localhost:3000/${user}`)
  //     .then((res) => {
  //       setState({ ...state, feedList: res.data });
  //     });
  // };

  const editProfile = () => {
    navigate(location.pathname + '/edit', { state: { id: user } });
  };

  return (
    <div>
      <div id='sidebar'>
        <button className='edit-profile' onClick={editProfile}>
          Edit Profile
        </button>
        <h2>{user}</h2>

        <ul>
          <li>Favorite City:</li>
          <li>Bio: </li>
        </ul>
      </div>

      <Feed
        // fetchFeed={fetchLocationFeed}
        handleClick={handleClick}
        feedList={state.feedList}
        activeButton={state.activeButton}
        windowLocation={location.pathname}
        // location={location}
      />
    </div>
  );
};

export default ProfileContainer;
