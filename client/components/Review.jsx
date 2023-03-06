import React from 'react';
import { useLocation } from 'react-router-dom';

const Review = ({
  locationName,
  address,
  rating,
  description,
  userName,
  windowLocation,
}) => {
  // const handleClick = (id) => {};
  const location = useLocation();
  return (
    <div className='review-post'>
      {windowLocation.includes('user/profile') && (
        <button
          className='edit-button' /*onClick={() => handleClick(review.id)}*/
        >
          ...
        </button>
      )}
      <ul className='review-info'>
        <li className='username-post'>
          <span>{userName}</span>
        </li>
        <li>
          <span>Name:</span> {locationName}
        </li>
        <li>
          <span>Address:</span> {address}
        </li>
        <li>
          <span>Rating:</span> {rating}
        </li>
        <li>
          <span>Description:</span> {description}
        </li>
      </ul>
    </div>
  );
};
export default Review;
