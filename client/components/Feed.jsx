import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review.jsx';
// import axios from 'axios';

const Feed = ({
  fetchFeed,
  handleClick,
  feedList,
  location,
  activeButton,
  windowLocation,
}) => {
  // useEffect(() => {
  //   fetchFeed();
  // }, []);

  const posts = feedList.map((review) => {
    return [
      <Review
        id={review.id}
        locationName={review.name}
        address={review.address}
        rating={review.rating}
        description={review.comments}
        userName={review.user}
      />,
    ];
  });

  return (
    <div className='feed-container'>
      <h2>{location}</h2>
      <div>
        <button
          value='Activities'
          onClick={handleClick}
          className={activeButton === 'Activities' ? 'active' : ''}
        >
          Activities
        </button>
        <button
          value='Landmarks'
          onClick={handleClick}
          className={activeButton === 'Landmarks' ? 'active' : ''}
        >
          Landmarks
        </button>
        <button
          value='Restaurants'
          onClick={handleClick}
          className={activeButton === 'Restaurants' ? 'active' : ''}
        >
          Restaurants
        </button>
      </div>
      <div id='posts-container'>
        {/* {posts} */}
        {/* <Review
          locationName={'bruh'}
          address={'123 bruh moment'}
          rating={'3 bruhs'}
          description={'hello world'}
          userName={'cool bruh'}
          windowLocation={windowLocation}
        /> */}
      </div>
    </div>
  );
};

export default Feed;
