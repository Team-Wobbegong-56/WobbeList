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

  const titleSplit = location.split(' ');
  const titleArr = [];
  titleSplit.forEach((word) => {
    titleArr.push(word[0].toUpperCase().concat(word.slice(1)));
  });
  const title = titleArr.join(' ');
  return (
    <div>
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
