import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') navigate('/user/:location');
  };

  return (
    <div id='home-page-container'>
      <div id='home-page'>
        <p>Where to? </p>
        <input
          type='text'
          name='location'
          id='location-search'
          onChange={handleChange}
          value={location}
          onKeyDown={handleKeyDown}
        />
        {/* <button id='submit' onClick={submitLocation} disabled={!location}>
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default HomePage;
