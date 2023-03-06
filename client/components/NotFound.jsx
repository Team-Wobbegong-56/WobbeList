import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function NotFound () {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500)
  }, [])

  return (
    <h1>Page Not Found ...</h1>
  )
}

export default NotFound;