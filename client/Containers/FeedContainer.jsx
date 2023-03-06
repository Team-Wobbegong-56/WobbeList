import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const FeedContainer = () => {
  const windowLocation = useLocation();
  const { location } = useParams();
  const [state, setState] = useState({
    category: 'Activities',
    activeButton: 'Activities',
    feedList: [],
  });

  const handleClick = (e) => {
    setState({
      ...state,
      category: e.target.value,
      activeButton: e.target.value,
    });
  };

  const fetchLocationFeed = () => {
    console.log(state.category);
    axios
      .get(
        `http://localhost:3000/review/city/${location}/type/${state.category}`
      )
      .then((res) => {
        console.log(res);
        setState({ ...state, feedList: res.data });
      })
      .catch((err) => console.log(err));
  };

  // console.log('state', state, 'feedList', state.feedList);
  return (
    <div>
      <Feed
        fetchFeed={fetchLocationFeed}
        handleClick={handleClick}
        activeButton={state.activeButton}
        feedList={state.feedList}
        location={location}
        windowLocation={windowLocation.pathname}
      />
    </div>
  );
};

export default FeedContainer;
