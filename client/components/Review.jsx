import React from 'react';

const Review = ({ locationName, address, rating, description, userName }) => (
  <div className='review-post'>
    <ul className='review-info'>
      <li>
        <span>Name:</span> {locationName}
      </li>
      <li>
        <span>Address:</span> {address}
      </li>
      <li>
        <span>Rating:</span> {rating}
      </li>
      {/* <li>Description: {locationName}</li> */}
      <li>
        <span>Posted By</span> {userName}
      </li>
    </ul>
  </div>
);

export default Review;
