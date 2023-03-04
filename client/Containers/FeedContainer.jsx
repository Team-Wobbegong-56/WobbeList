import React, { useState } from 'react';
import Feed from '../components/Feed.jsx';
import { useParams } from 'react-router-dom';

const FeedContainer = () => {
  const { location } = useParams();
  const [state, setState] = useState({
    category: 'Activities',
    feedList: [],
  });

  const handleClick = (e) => {
    console.log(e.target.value);
    setState({ ...state, category: e.target.value });
  };

  // const fetchLocationFeed = () => {
  //   axios
  //     .get(`http://localhost:3000/${location}/${state.category}`)
  //     .then((res) => {
  //       setState({ ...state, feedList: res.data });
  //     });
  // };

  return (
    <div>
      <Feed
        // fetchLocationFeed={fetchLocationFeed}
        handleClick={handleClick}
        feedList={state.feedList}
        location={location}
      />
    </div>
  );
};

export default FeedContainer;
