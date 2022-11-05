const React = require('react')
const LoginOut = require('../layouts/LoginOut')

class Login extends React.Component {
  render () {
    return (
      <LoginOut>
        <h1>MyMedia Login</h1><br />
        <form action='/user/login' method='POST'>
          <input type='text' name='username' placeholder='Username' required />
          <input type='password' name='password' placeholder='Password' required />
          <input type='submit' value='Login' />
        </form>
        <br />
        Not yet a user? <a href='/user/signup'>Sign up!</a>
      </LoginOut>
    )
  }
}

module.exports = Login
