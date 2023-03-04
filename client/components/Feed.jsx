import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review.jsx';
// import axios from 'axios';

const Feed = ({ fetchLocationFeed, handleClick, feedList, location }) => {
  // const handleClick = (e) => {
  //   console.log(e.target.value);

  // };

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/${location}/${state.category}`)
  //     .then ((res) => {
  //       setState({...state, feedList: res.data})
  //     })
  // fetchLocationFeed()
  // }, [])

  // const posts = feedList.map((review) => {
  //   return [
  //     <Review
  //       locationName={review.name}
  //       address={review.address}
  //       rating={review.rating}
  //       userName={review.user}
  //     />,
  //   ];
  // });

  return (
    <div className='feed-container'>
      <h2>{location}</h2>
      <div>
        <button value='Activities' onClick={handleClick}>
          Activities
        </button>
        <button value='Landmarks' onClick={handleClick}>
          Landmarks
        </button>
        <button value='Restaurants' onClick={handleClick}>
          Restaurants
        </button>
      </div>
      <div id='feed'>
        <Review
          locationName={'bruh'}
          address={'123 bruh moment'}
          rating={'3 bruhs'}
          userName={'cool bruh'}
        />
      </div>
    </div>
  );
};

export default Feed;
