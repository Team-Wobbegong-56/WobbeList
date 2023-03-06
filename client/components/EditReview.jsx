import React, { useState } from 'react';

function EditReview(props) {
  const action = props.action ?? '(action)';
  const reqType = props.request ?? '(reqType)';
  const reqPath = '/';

  //need to do controlled inputs
  const [inputs, setInputs] = useState({
    city: '',
    category: 'Activities',
    name: '',
    rating: 5,
    comments: '',
    address: '',
  });

  return (
    <div id='edit-review'>
      <div id='edit-review-box'>
        <h1>New Review</h1>
        <form className='review-field' action={reqPath} method={reqType}>
          <div className='form-input'>
            <label htmlFor='city'>City: </label>
            <input type='city' name='city' id='city'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='category'>Category: </label>
            <select name='category' id='category'>
              <option disabled hidden value=''></option>
              <option value='Activity'>Activity</option>
              <option value='Landmark'>Landmark</option>
              <option value='Restaurant'>Restaurant</option>
            </select>
          </div>
          <div className='form-input'>
            <label htmlFor='name'>Name: </label>
            <input type='name' name='name' id='name'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='rating'>Rating: </label>
            <select name='rating' id='rating'>
              <option disabled hidden value=''></option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className='form-input'>
            <label htmlFor='comments'>Comments (optional): </label>
            <input type='comments' name='comments' id='comments'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='address'>Address: </label>
            <input type='address' name='address' id='address'></input>
          </div>
          <input type='submit' value={action}></input>
        </form>
      </div>
    </div>
  );
}

export default EditReview;
