import React from 'react';
import { Link } from 'react-router-dom';

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
  
  return (
    <div id='login'>
      <h1>{title}</h1>
      <form className='login-form' action={reqPath} method='post'>
        <div className='form-input'>
          <label htmlFor='username'>Username: </label>
          <input type='username' name='username' id='username'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password: </label>
          <input type='text' name='password' id='password'></input>
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