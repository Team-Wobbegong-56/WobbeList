import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review.jsx';
import axios from 'axios';

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
  // }, [activeButton]);

  const posts = [];
  feedList.forEach((review) => {
    const stars = [];
    for (let i = 0; i < review.rating; i++) {
      stars.push(<span className='star'>&#9733;</span>);
    }
    posts.push(
      <Review
        windowLocation={windowLocation}
        key={review._id}
        locationName={review.name}
        address={review.address}
        rating={stars}
        description={review.comments}
        userName={review.user_id}
      />
    );
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
      <div id='posts-container'>{posts}</div>
    </div>
  );
};

export default Feed;