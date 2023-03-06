import React, { useContext, useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import UserContext from '../UserContext.jsx';
import axios from 'axios';
import { setCookie } from 'react-cookie';

function Login (props) {
  let title;
  let question;
  let answer;
  let buttonText;
  let path;
  let reqPath = '/user';
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
  }
  setValues();

  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) {
      return redirect('/user/home')
    }
  }, [user])

  const handleClick = (event) => {
    console.log('handleClick...')
    console.log('reqPath: ', reqPath);
    console.log('username + password: ', {username, password});
    const obj = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    }

    fetch(reqPath, body)
      .then((data) =>{
        console.log(data);
        setCookie('userId', data.sessionId);
        setUser(data.sessionId);
        setUsername('');
        setPassword('');
      })
      .catch((error) => console.log(error));

    // axios.post(reqPath, {username, password})
    //   .then((data) =>{
    //     console.log(data);
    //     setCookie('userId', data.sessionId);
    //     setUser(data.sessionId);
    //     setUsername('');
    //     setPassword('');
    //   })
    //   .catch((error) => console.log(error))
    event.preventDefault();
  }
  
  return (
    <div id='login'>
      <h1>{title}</h1>
      <form className='login-form' onSubmit={handleClick}>
        <div className='form-input'>
          <label htmlFor='username'>Username: </label>
          <input type='username' name='username' id='username' required value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password: </label>
          <input type='text' name='password' id='password' required value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>
        <input type="submit" value={buttonText}></input>
      </form>
      <div className='form-input'>
        <p>{question}</p>
        <Link to={path}><p><strong>{answer}</strong></p></Link>
      </div>
    </div>
  )
}

export default Login;