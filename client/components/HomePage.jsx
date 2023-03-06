import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      navigate(`/user/${location}`);
    }
  };

  return (
    <div id='home-page-container'>
      <div id='home-page'>
        <p>Where to? </p>
        <div id='search-bar'>
          <input
            type='text'
            name='location'
            id='location-search'
            onChange={handleChange}
            value={location}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
