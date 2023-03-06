import React, { useState } from 'react';
import EditReview from './EditReview.jsx';
import axios from 'axios';
import addressPic from '/client/location.svg';
import cityPic from '/client/building.svg';
import edit from '../edit.svg';

const Review = ({
  reviewId,
  locationName,
  address,
  type,
  rating,
  city,
  ratingNum,
  description,
  userName,
  windowLocation,
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [inputs, setInputs] = useState({
    city,
    category: type,
    name: locationName,
    rating: ratingNum,
    comments: description,
    address,
  });
  const handleClick = () => {
    setOpenEdit(true);
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setOpenEdit(false);
    axios
      .put(`http://localhost:3000/api/review/${reviewId}`, {
        user_id: '6403c4d2c983ee99555e1365',
        city: inputs.city,
        review_type: inputs.category,
        name: inputs.name,
        rating: inputs.rating,
        address: inputs.address,
        comments: inputs.comments,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className='review-post'>
      {windowLocation.includes('user/profile') && (
        <button className='edit-button' onClick={() => handleClick(reviewId)}>
          <img src={edit} width='30px' height='30px' />
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
          <li className='city-review'>
            <img
              className='city-icon'
              height='20px'
              width='20px'
              src={cityPic}
            />
            <strong>{city}</strong>
          </li>
        )}
        <li className='description'>{description}</li>
        <li>
          <span>Posted by</span> {userName}
        </li>
      </ul>
      {openEdit ? (
        <EditReview
          title={'Edit'}
          current={inputs}
          change={handleChange}
          cancel={() => setOpenEdit(false)}
          submit={handleSubmit}
        />
      ) : null}
    </div>
  );
};
export default Review;
