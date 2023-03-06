import React from 'react';
import { useLocation } from 'react-router-dom';
import addressPic from '/client/location.svg';
import cityPic from '/client/building.svg';

const Review = ({
  locationName,
  address,
  rating,
  city,
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
        <li className='review-heading'>
          <h3 className='location-post'>{locationName}</h3>
          <span className='star-container'>{rating}</span>
        </li>
        <li className='addresss'>
          <img className='address-icon' src={addressPic} /> {address}
        </li>
        {windowLocation.includes('user/profile') && (
          <li>
            <img className='city-icon' src={cityPic} /> {city}
          </li>
        )}
        <li className='description'>{description}</li>
        <li>
          <span>Posted by</span> {userName}
        </li>
      </ul>
    </div>
  );
};
export default Review;
