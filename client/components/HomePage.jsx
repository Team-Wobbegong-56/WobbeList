import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const submitLocation = async (e) => {
    e.preventDefault();
    navigate('/:location');
  };

  return (
    <div id='home-page'>
      <p>Where are you going? </p>
      <input
        type='text'
        name='location'
        id='location-search'
        onChange={handleChange}
        value={location}
      />
      <button id='submit' onClick={submitLocation} disabled={!location}>
        Submit
      </button>
    </div>
  );
};

export default HomePage;
