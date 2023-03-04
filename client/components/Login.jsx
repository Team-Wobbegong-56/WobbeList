import React from 'react';

function Login () {
  return (
    <div id='login'>
      <h1>Welcome to WobbeList !</h1>
      <form className='login-form' action='/' method='get'>
        <div className='form-input'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' id='email'></input>
        </div>
        <div className='form-input'>
          <label htmlFor='password'>Password: </label>
          <input type='text' name='password' id='password'></input>
        </div>
        <input type="submit" value="Log In"></input>
      </form>
    </div>
  )
}

export default Login;