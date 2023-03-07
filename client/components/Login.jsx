import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext.jsx';
import axios from 'axios';

function Login(props) {
  let title;
  let question;
  let answer;
  let buttonText;
  let path;
  let reqPath = 'api/user';
  const setValues = () => {
    if (props.action === 'login') {
      title = 'Welcome to WobbeList !';
      question = 'New to WobbeList?';
      answer = 'Create an account.';
      buttonText = 'Log In';
      path = '/signup';
      reqPath += '/login';
    } else {
      title = 'Create an account !';
      question = 'Already have an account?';
      answer = 'Log in here.';
      buttonText = 'Sign Up';
      path = '/';
    }
  };
  setValues();

  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVis, setPasswordVis] = useState('password');
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate('/user/home');
    }
  }, [user]);

  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post(reqPath, { username, password })
      .then((res) => {
        const user = res.data.user;
        setUser(user);
        setUsername('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };

  const showPassword = () => {
    if (passwordVis === 'password') {
      setPasswordVis('text');
    } else {
      setPasswordVis('password');
    }
  };

  return (
    <div id='login-container'>
      <div id='login'>
        <h1>{title}</h1>
        <form className='login-form' onSubmit={handleClick}>
          <div className='form-input'>
            <label htmlFor='username'>Username: </label>
            <input
              type='username'
              name='username'
              id='username'
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password: </label>
            <input
              type={passwordVis}
              name='password'
              id='password'
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className='form-input'>
            <input type='checkbox' onClick={showPassword}></input>
            <label>Show Password</label>
          </div>
          <input type='submit' value={buttonText} id='login-button'></input>
        </form>
        <div className='form-input' id='login-question'>
          <p>{question}</p>
          <Link to={path}>
            <p>
              <strong>{answer}</strong>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
