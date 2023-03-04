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
    console.log(e.target.value);
    setState({
      ...state,
      category: e.target.value,
      activeButton: e.target.value,
    });
    console.log('class', e.target.className);
  };

  const fetchLocationFeed = () => {
    axios
      .get(
        `http://localhost:3000/review/city/${location}/type/${state.category}`
      )
      .then((res) => {
        setState({ ...state, feedList: res.data });
      });
  };

  return (
    <div>
      <Feed
        // fetchFeed={fetchLocationFeed}
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
