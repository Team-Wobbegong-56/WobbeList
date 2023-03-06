import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const FeedContainer = () => {
  const windowLocation = useLocation();
  const { location } = useParams();
  const [state, setState] = useState({
    activeButton: 'Activities',
    feedList: [],
  });

  const handleClick = (e) => {
    setState({
      ...state,
      activeButton: e.target.value,
    });
  };

  const fetchLocationFeed = () => {
    axios(
      `http://localhost:3000/api/review/city/${location}/type/${state.activeButton}`
    )
      .then((res) => {
        setState({ ...state, feedList: res.data });
      })
      .catch((err) => console.log(err));
  };

  const titleSplit = location.split(' ');
  const titleArr = [];
  titleSplit.forEach((word) => {
    titleArr.push(word[0].toUpperCase().concat(word.slice(1)));
  });
  const title = titleArr.join(' ');
  return (
    <div id='feed-page'>
      <Feed
        fetchFeed={fetchLocationFeed}
        handleClick={handleClick}
        activeButton={state.activeButton}
        feedList={state.feedList}
        location={title}
        windowLocation={windowLocation.pathname}
      />
    </div>
  );
};

export default FeedContainer;
